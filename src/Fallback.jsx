import { Alert, AlertTitle } from "@mui/material";
function Fallback() {
  return (
    <Alert
      variant="filled"
      severity="error"
      sx={{
        width: "calc(100% -20px)%",
        maxWidth: "700px",
        margin: "50px auto",
      }}
    >
      <AlertTitle>
        <strong>Your browser does not support speech-recognition API!</strong>
      </AlertTitle>
      You are probably using the Firefox or Internet Explorer browser. Please
      consider using Google Chrome, Safari, Opera Mini, or any other modern
      browser that supports speech-recognition API.
    </Alert>
  );
}

export default Fallback;
