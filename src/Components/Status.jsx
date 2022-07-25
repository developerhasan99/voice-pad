import { useContext } from "react";
import context from "../context/Context";

function Status() {
  const { state } = useContext(context);

  return (
    <p style={{ marginRight: "auto" }}>
      {state.isListening ? "Listening..." : "Wating..."}
    </p>
  );
}

export default Status;
