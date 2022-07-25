// ─── Import Dependecies ─────────────────────────────────────────────────────────
import { Box } from "@mui/material";
import CopyBtn from "./CoppyBtn";
import LanguageToggler from "./LanguageToggler";
import MicButton from "./MicButton";
import WordCounter from "./WordCOunter";
import Status from "./Status";

// ─── Scafolding The Component ───────────────────────────────────────────────────
function BottomPanel() {
  return (
    <Box className="bottomPanel">
      <MicButton />
      <Status />
      <WordCounter />
      <LanguageToggler />
      <CopyBtn />
    </Box>
  );
}

// ─── Export The Module ──────────────────────────────────────────────────────────
export default BottomPanel;
