// ─── Import Dependecies ─────────────────────────────────────────────────────────
import { useStateWithCallbackLazy } from "use-state-with-callback";
import { useEffect, useRef } from "react";
import context from "./context/Context";
import handleKyeEvents from "./utils/handleKyeEvents";
import TextArea from "./Components/TextArea";
import BottomPanel from "./Components/BottomPanel";
import lstorage from "./utils/localStorage";
import checkInternetConnection from "./utils/checkInternetConnection";
import speechRecognizer from "./utils/speechRecognizer";
import SnackBars from "./Components/SnackBars/SnackBars";
import Footer from "./Components/Footer";

// ─── Scafolding The Component ───────────────────────────────────────────────────
function App() {
  // ─── Setup State ────────────────────────────────────────────────────────────────
  const [state, setState] = useStateWithCallbackLazy({
    isBangla: true,
    isOnline: true,
    isMic: true,
    showOnlineSnack: false,
    isListening: false,
    isCopied: false,
    text: "",
  });

  // ─── Update State From Local Storage ──────────────────────────────────────
  useEffect(() => {
    if (lstorage.get()) {
      const lsState = lstorage.get();
      setState({
        ...lsState,
        isOnline: true,
        isMic: true,
        isListening: false,
        isCopied: false,
      });
    }
  }, []);

  // ─── Save State To Local Storage ────────────────────────────────────────────────
  setInterval(() => {
    lstorage.save(state);
  }, 3000);

  // ─── Create A Editor Refarance ──────────────────────────────────────────────────
  const editorRef = useRef(null);

  // ─── Listen Keyboard Event ──────────────────────────────────────────────────────
  handleKyeEvents(state, setState);

  // ─── Check Internet Connection ──────────────────────────────────────────────────
  checkInternetConnection(state, setState);

  // ─── Call Speech Recognizer Function ────────────────────────────────────────────
  speechRecognizer(state, setState, editorRef, useEffect);

  return (
    <context.Provider value={{ state, setState }}>
      <div className="App">
        <TextArea ref={editorRef} />
        <BottomPanel />
      </div>
      <Footer />
      <SnackBars />
    </context.Provider>
  );
}

// ─── Export The Module ──────────────────────────────────────────────────────────
export default App;
