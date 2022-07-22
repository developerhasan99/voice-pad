import { IconButton, Snackbar, Alert } from "@mui/material";
import { CopyAll } from "@mui/icons-material";
import { useContext } from "react";
import context from "../context/Context";

function CopyBtn() {
  const { state, setState } = useContext(context);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(state.text)
      .then(setState({ ...state, isCopied: true }))
      .catch((e) => console.log(e));
  };

  const handleClose = () => {
    setState({ ...state, isCopied: false });
  };

  return (
    <>
      <IconButton
        onClick={handleCopy}
        title="Copy editor texts!"
        color="success"
      >
        <CopyAll />
      </IconButton>
      <Snackbar
        open={state.isCopied}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Texts Copied to Clipboard!
        </Alert>
      </Snackbar>
    </>
  );
}

export default CopyBtn;
