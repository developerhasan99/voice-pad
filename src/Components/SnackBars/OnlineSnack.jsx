import { Snackbar, Alert } from "@mui/material";
import { useContext } from "react";
import context from "../../context/Context";

function OnlineSnack() {
  const { state, setState } = useContext(context);

  // ─── Handle Snackbar Close Event ────────────────────────────────────────────────
  const handleClose = () => {
    setState({ ...state, showOnlineSnack: false });
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={state.showOnlineSnack}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert
        sx={{
          width: "100%",
        }}
        variant="filled"
        onClose={handleClose}
        severity="info"
      >
        Your Internet connection was restored!
      </Alert>
    </Snackbar>
  );
}

export default OnlineSnack;
