// ─── Import Dependecies ─────────────────────────────────────────────────────────
import { Box } from "@mui/material";
import { useContext } from "react";
import context from "../context/Context";
import CopyBtn from "./CoppyBtn";
import LanguageToggler from "./LanguageTiggler";
import MicButton from "./MicButton";

// ─── Scafolding The Component ───────────────────────────────────────────────────
function BottomPanel() {
  const { state } = useContext(context);

  return (
    <Box
      sx={{
        display: "flex",
        marginTop: "-6px",
        padding: "12px 15px",
        gap: "15px",
        alignItems: "center",
      }}
    >
      <MicButton />
      <p style={{ margin: "0" }}>
        {state.isListening ? "Listening..." : "Wating..."}
      </p>
      <LanguageToggler />
      <CopyBtn />
    </Box>
  );
}

// ─── Export The Module ──────────────────────────────────────────────────────────
export default BottomPanel;
