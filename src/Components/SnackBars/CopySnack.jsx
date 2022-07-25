import { Snackbar, Alert } from "@mui/material";
import { useContext } from "react";
import context from "../../context/Context";

function CopySnack() {
  const { state, setState } = useContext(context);

  // ─── Handle Snackbar Close Event ────────────────────────────────────────────────
  const handleClose = () => {
    setState({ ...state, isCopied: false });
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={state.isCopied}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert
        sx={{
          width: "100%",
        }}
        variant="filled"
        onClose={handleClose}
        severity="success"
      >
        Texts Copied to Clipboard!
      </Alert>
    </Snackbar>
  );
}

export default CopySnack;
