// ─── Import Dependecies ─────────────────────────────────────────────────────────
import { Mic } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useContext } from "react";
import context from "../context/Context";

// ─── Scafolding The Component ───────────────────────────────────────────────────
function MicButton() {
  const { state, setState } = useContext(context);

  // ─── Handle Onclick Event ───────────────────────────────────────────────────────
  const handleClick = () => {
    setState({
      ...state,
      isListening: !state.isListening,
    });
  };

  return (
    <IconButton
      onClick={handleClick}
      className={state.isListening ? "listening" : ""}
    >
      <Mic />
    </IconButton>
  );
}

// ─── Export The Module ──────────────────────────────────────────────────────────
export default MicButton;
