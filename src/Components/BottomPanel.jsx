import { Mic } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import CopyBtn from "./CoppyBtn";
import LanguageToggler from "./LanguageTiggler";

function BottomPanel() {
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
      <IconButton>
        <Mic />
      </IconButton>
      <p style={{ margin: "0" }}>Listening...</p>
      <LanguageToggler />
      <CopyBtn />
    </Box>
  );
}

export default BottomPanel;
