import { Snackbar, Alert, AlertTitle } from "@mui/material";
import { useContext } from "react";
import context from "../../context/Context";

function MicSnack() {
  const { state, setState } = useContext(context);

  // ─── Handle Snackbar Close Event ────────────────────────────────────────────────
  const handleClose = () => {
    setState({ ...state, isMic: true });
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={!state.isMic}
      onClose={handleClose}
    >
      <Alert
        variant="filled"
        severity="warning"
        onClose={handleClose}
        sx={{
          width: "calc(100% -20px)%",
          maxWidth: "400px",
          margin: "50px auto",
        }}
      >
        <AlertTitle>
          <strong>Does not recognize your speech!</strong>
        </AlertTitle>
        Please turn on your microphone. Or, adjust the input volume level. Then,
        try again!
      </Alert>
    </Snackbar>
  );
}

export default MicSnack;
