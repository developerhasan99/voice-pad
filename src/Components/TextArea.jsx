import { useContext, useRef } from "react";
import context from "../context/Context";

function TextArea() {
  const editorRef = useRef(null);

  const { state, setState } = useContext(context);

  const handleOnChange = (e) => {
    setState({
      ...state,
      text: e.target.value,
    });
  };

  return (
    <textarea
      id="editor"
      ref={editorRef}
      onChange={handleOnChange}
      value={state.text}
      placeholder={
        state.isBangla
          ? "মাইক আইকনে ক্লিক করুন বা Alt+z টিপুন এবং লিখতে কথা বলুন!"
          : "Click the Mic icon or  press  Alt+z and speak to write!"
      }
    />
  );
}

export default TextArea;
