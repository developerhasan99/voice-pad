import lstorage from "./localStorage";
const speechRecognizer = (state, setState, editorRef, useEffect) => {
  // ─── Init Speech Recognizetion Api ──────────────────────────────────────────────
  const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  // ─── Configure Speech Rcognition Api ────────────────────────────────────────────
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  // ─── Set Recognition Language Based On State ────────────────────────────────────
  recognition.lang = state.isBangla ? "bn-bd" : "en-us";

  // ─── Conditionaly Start And Stop Voice Recognition ──────────────────────────────
  useEffect(() => {
    if (state.isListening) {
      recognition.start();
    } else {
      recognition.abort();
    }
  }, [state.isListening]);

  // ─── Handle Recognition Result ──────────────────────────────────────────────────
  recognition.onresult = function (event) {
    // ─── Get Current Cursor Position Before Updating The State ───────
    const curPos = editorRef.current.selectionStart;

    const newText = () => {
      if (editorRef.current.value.length === 0) {
        const fText = event.results[0][0].transcript + " ";
        return fText;
      }
      if (editorRef.current.value.length === curPos) {
        const sText =
          editorRef.current.value + event.results[0][0].transcript + " ";
        return sText;
      }
      const tText =
        editorRef.current.value.slice(0, curPos) +
        event.results[0][0].transcript +
        " " +
        editorRef.current.value.slice(curPos);
      return tText;
    };

    // ─── Calculate New Cursor Position ───────────────────────────────
    const newCurPos = curPos + event.results[0][0].transcript.length + 1;

    // ─── Updare The State ────────────────────────────────────────────
    setState(
      {
        ...state,
        isListening: false,
        text: newText(),
      },
      () => {
        //
        // UPDATE THE CURSOR POSITION
        //
        editorRef.current.setSelectionRange(newCurPos, newCurPos);
        // ─── Save State To Localstorage ──────────────────────────────────
        lstorage.save(state);
      }
    );
  };

  // ─── Handle Speech Recognition Error ────────────────────────────────────────────
  recognition.onerror = (e) => {
    if (e.error === "no-speech") {
      setState({ ...state, isListening: false, isMic: false });
    }
  };
};

export default speechRecognizer;
