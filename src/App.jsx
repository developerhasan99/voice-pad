import { useRef } from "react";
import { useStateWithCallbackLazy } from "use-state-with-callback";

const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.continuous = false;
recognition.interimResults = false;
recognition.maxAlternatives = 1;

function App() {
  const [state, setState] = useStateWithCallbackLazy({
    listning: false,
    text: "",
    isBangla: true,
  });

  recognition.lang = state.isBangla ? "bn-bd" : "en-us";

  const editorRef = useRef();

  const handleOnChange = (e) => {
    setState({
      ...state,
      text: e.target.value,
    });
  };

  window.onkeydown = function (e) {
    if (e.altKey && e.key === "z") {
      if (!state.listning) recognition.start();
      setState({
        ...state,
        listning: true,
      });
    }
  };

  recognition.onresult = function (event) {
    const curPos = editorRef.current.selectionStart;

    const newText = () => {
      if (editorRef.current.value.length === 0) {
        return event.results[0][0].transcript + " ";
      }
      return (
        editorRef.current.value.slice(0, curPos) +
        event.results[0][0].transcript +
        editorRef.current.value.slice(curPos)
      );
    };

    const latestText = newText();

    const newCurPos = curPos + event.results[0][0].transcript.length;

    setState(
      {
        ...state,
        listning: false,
        text: latestText,
      },
      () => {
        editorRef.current.setSelectionRange(newCurPos, newCurPos);
      }
    );
  };

  const handleLanguageChange = () => {
    setState({ ...state, isBangla: !state.isBangla });
  };

  return (
    <div className="App">
      <textarea
        id="editor"
        ref={editorRef}
        onChange={handleOnChange}
        cols="30"
        rows="20"
        value={state.text}
        placeholder={
          state.isBangla ? "কথা বলে লিখতে শুরু করুন!" : "Speek to write!"
        }
      ></textarea>
      <div>
        <p>
          Status:{" "}
          {state.listning
            ? "Listening..."
            : 'Press "Alt+z" to start voice typing!'}
        </p>
        <button onClick={handleLanguageChange}>
          click here to switch language to{" "}
          {state.isBangla ? "English" : "Bangla"}
        </button>
      </div>
    </div>
  );
}

export default App;
