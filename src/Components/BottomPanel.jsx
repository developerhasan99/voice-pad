// ─── Import Dependecies ─────────────────────────────────────────────────────────
import { Box } from "@mui/material";
import { useContext } from "react";
import context from "../context/Context";
import CopyBtn from "./CoppyBtn";
import LanguageToggler from "./LanguageToggler";
import MicButton from "./MicButton";
import WordCounter from "./WordCOunter";

// ─── Scafolding The Component ───────────────────────────────────────────────────
function BottomPanel() {
  const { state } = useContext(context);

  return (
    <Box className="bottomPanel">
      <MicButton />
      <p style={{ marginRight: "auto" }}>
        {state.isListening ? "Listening..." : "Wating..."}
      </p>
      <WordCounter />
      <LanguageToggler />
      <CopyBtn />
    </Box>
  );
}

// ─── Export The Module ──────────────────────────────────────────────────────────
export default BottomPanel;
