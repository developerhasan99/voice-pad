// ─── Import Dependecies ─────────────────────────────────────────────────────────
import { useContext } from "react";
import { Grid, Switch } from "@mui/material";
import context from "../context/Context";

// ─── Scafolding The Component ───────────────────────────────────────────────────
function LanguageToggler() {
  const { state, setState } = useContext(context);

  // ─── Handle Change Event ────────────────────────────────────────────────────────
  const handleChange = () => {
    setState({ ...state, isBangla: !state.isBangla });
  };

  return (
    <Grid
      sx={{ width: "auto", justifyContent: "end" }}
      component="div"
      container
      alignItems="center"
      spacing={0.5}
    >
      <Grid item>EN</Grid>
      <Grid item>
        <Switch
          color="success"
          checked={state.isBangla}
          onChange={handleChange}
        />
      </Grid>
      <Grid item>BN</Grid>
    </Grid>
  );
}

// ─── Export The Module ──────────────────────────────────────────────────────────
export default LanguageToggler;
