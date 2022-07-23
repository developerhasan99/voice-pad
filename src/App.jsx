// ─── Import Dependecies ─────────────────────────────────────────────────────────
import { useRef } from "react";
import { useStateWithCallbackLazy } from "use-state-with-callback";
import BottomPanel from "./Components/BottomPanel";
import TextArea from "./Components/TextArea";
import context from "./context/Context";
import recognition from "./utils/speachRecognition";

// ─── Scafolding The Component ───────────────────────────────────────────────────
function App() {
  // ─── Setup State ────────────────────────────────────────────────────────────────
  const [state, setState] = useStateWithCallbackLazy({
    isBangla: true,
    isListening: false,
    isCopied: false,
    text: "",
  });

  // ─── Set Recognition Language Based On State ────────────────────────────────────
  recognition.lang = state.isBangla ? "bn-bd" : "en-us";

  // ─── Create A Editor Refarance ──────────────────────────────────────────────────
  const editorRef = useRef(null);

  // ─── Listen Keyboard Event ──────────────────────────────────────────────────────
  window.onkeydown = function (e) {
    if (e.altKey && e.key === "z") {
      setState({
        ...state,
        isListening: true,
      });
    }
  };

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
      }
    );
  };

  return (
    <context.Provider value={{ state, setState }}>
      <div className="App">
        <TextArea ref={editorRef} />
        <BottomPanel />
      </div>
    </context.Provider>
  );
}

// ─── Export The Module ──────────────────────────────────────────────────────────
export default App;
