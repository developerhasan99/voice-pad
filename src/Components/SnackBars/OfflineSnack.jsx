import { Snackbar, Alert } from "@mui/material";
import { useContext } from "react";
import context from "../../context/Context";

function OfflineSnack() {
  const { state, setState } = useContext(context);

  // ─── Handle Snackbar Close Event ────────────────────────────────────────────────
  const handleClose = () => {
    setState({ ...state, isOnline: true });
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={!state.isOnline}
      onClose={handleClose}
      autoHideDuration={6000}
    >
      <Alert
        sx={{
          width: "100%",
        }}
        variant="filled"
        severity="warning"
        onClose={handleClose}
      >
        You are currently offline!
      </Alert>
    </Snackbar>
  );
}

export default OfflineSnack;
