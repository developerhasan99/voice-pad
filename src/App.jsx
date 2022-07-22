import BottomPanel from "./Components/BottomPanel";
import TextArea from "./Components/TextArea";
import ContextProvider from "./context/ContextPeovider";

function App() {
  // recognition.lang = state.isBangla ? "bn-bd" : "en-us";

  // window.onkeydown = function (e) {
  //   if (e.altKey && e.key === "z") {
  //     if (!state.listning) recognition.start();
  //     setState({
  //       ...state,
  //       listning: true,
  //     });
  //   }
  // };

  // recognition.onresult = function (event) {
  //   const curPos = editorRef.current.selectionStart;

  //   const newText = () => {
  //     if (editorRef.current.value.length === 0) {
  //       return event.results[0][0].transcript + " ";
  //     }
  //     return (
  //       editorRef.current.value.slice(0, curPos) +
  //       event.results[0][0].transcript +
  //       editorRef.current.value.slice(curPos)
  //     );
  //   };

  //   const latestText = newText();

  //   const newCurPos = curPos + event.results[0][0].transcript.length;

  //   setState(
  //     {
  //       ...state,
  //       listning: false,
  //       text: latestText,
  //     },
  //     () => {
  //       editorRef.current.setSelectionRange(newCurPos, newCurPos);
  //     }
  //   );
  // };

  // const handleLanguageChange = () => {
  //   setState({ ...state, isBangla: !state.isBangla });
  // };

  return (
    <ContextProvider>
      <div className="App">
        <TextArea />
        <BottomPanel />
      </div>
    </ContextProvider>
  );
}

export default App;
