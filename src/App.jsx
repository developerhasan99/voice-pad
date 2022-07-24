// ─── Import Dependecies ─────────────────────────────────────────────────────────
import { useStateWithCallbackLazy } from "use-state-with-callback";
import { useEffect, useRef } from "react";
import context from "./context/Context";
import handleKyeEvents from "./utils/handleKyeEvents";
import recognition from "./utils/speachRecognition";
import TextArea from "./Components/TextArea";
import BottomPanel from "./Components/BottomPanel";
import lstorage from "./utils/localStorage";

// ─── Scafolding The Component ───────────────────────────────────────────────────
function App() {
  // ─── Setup State ────────────────────────────────────────────────────────────────
  const [state, setState] = useStateWithCallbackLazy({
    isBangla: true,
    isListening: false,
    isCopied: false,
    text: "",
  });

  // ─── Update State From Local Storage ──────────────────────────────────────
  useEffect(() => {
    if (lstorage.get()) {
      setState(lstorage.get());
    }
  }, []);

  // ─── Set Recognition Language Based On State ────────────────────────────────────
  recognition.lang = state.isBangla ? "bn-bd" : "en-us";

  // ─── Create A Editor Refarance ──────────────────────────────────────────────────
  const editorRef = useRef(null);

  // ─── Listen Keyboard Event ──────────────────────────────────────────────────────
  handleKyeEvents(state, setState);

  // ─── Conditionaly Start And Stop Voice Recognition ──────────────────────────────
  if (state.isListening) {
    recognition.start();
  } else {
    recognition.stop();
  }

  // ─── Handle Recognition Result ──────────────────────────────────────────────────
  recognition.onresult = function (event) {
    const newText = () => {
      if (editorRef.current.value.length === 0) {
        return event.results[0][0].transcript;
      }
      return (
        editorRef.current.value.slice(0, curPos) +
        event.results[0][0].transcript +
        editorRef.current.value.slice(curPos)
      );
    };

    // ─── Get Current Cursor Position Before Updating The State ───────
    const curPos = editorRef.current.selectionStart;

    // ─── Calculate New Cursor Position ───────────────────────────────
    const newCurPos = curPos + event.results[0][0].transcript.length;

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
        //
        // SET STATE TO LOCALSTORAGE
        //
        lstorage.save(state);
      }
    );
  };

  return (
    <context.Provider value={{ state, setState }}>
      <div className="App">
        <TextArea ref={editorRef} />
        <BottomPanel />
      </div>
      <p className="footer__note">
        Made with ❤️ - by{" "}
        <a
          href="https://web.facebook.com/developerhasan99/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mehedi Hasan!
        </a>{" "}
      </p>
    </context.Provider>
  );
}

// ─── Export The Module ──────────────────────────────────────────────────────────
export default App;
