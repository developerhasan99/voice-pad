// ─── Import Dependecies ─────────────────────────────────────────────────────────
import { IconButton } from "@mui/material";
import { CopyAll } from "@mui/icons-material";
import { useContext } from "react";
import context from "../context/Context";

// ─── Scafolding The Component ───────────────────────────────────────────────────
function CopyBtn() {
  const { state, setState } = useContext(context);

  // ─── Handle Copy Function ───────────────────────────────────────────────────────
  const handleCopy = () => {
    navigator.clipboard
      .writeText(state.text)
      .then(setState({ ...state, isCopied: true }))
      .catch((e) => console.log(e));
  };

  return (
    <>
      <IconButton
        onClick={handleCopy}
        title="Copy editor texts!"
        color={state.isCopied ? "success" : "default"}
      >
        <CopyAll />
      </IconButton>
    </>
  );
}

// ─── Export The Module ──────────────────────────────────────────────────────────
export default CopyBtn;
