// ─── Import Dependecies ─────────────────────────────────────────────────────────
import { forwardRef, useContext } from "react";
import context from "../context/Context";
import lstorage from "../utils/localStorage";

// ─── Scafolding The Component ───────────────────────────────────────────────────
const TextArea = forwardRef((props, ref) => {
  const { state, setState } = useContext(context);

  // ─── Handle The Onchange Event Of Textarea ──────────────────────────────────────
  const handleOnChange = (e) => {
    setState(
      {
        ...state,
        isListening: false,
        text: e.target.value,
      },
      () => {
        //
        // SET STATE TO LOCALSTORAGE
        //
        lstorage.save(state);
      }
    );
  };

  return (
    <textarea
      id="editor"
      ref={ref}
      onChange={handleOnChange}
      value={state.text}
      placeholder={
        state.isBangla
          ? "মাইক আইকনে ক্লিক করুন বা Alt+z টিপুন এবং লিখতে কথা বলুন!"
          : "Click the Mic icon or  press  Alt+z and speak to write!"
      }
    />
  );
});

// ─── Export The Module ──────────────────────────────────────────────────────────
export default TextArea;
