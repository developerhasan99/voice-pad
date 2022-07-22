import { Grid, Switch } from "@mui/material";
import { useContext } from "react";
import context from "../context/Context";

function LanguageToggler() {
  const { state, setState } = useContext(context);

  const handleChange = () => {
    setState({ ...state, isBangla: !state.isBangla });
  };

  return (
    <Grid
      sx={{ justifyContent: "end" }}
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

export default LanguageToggler;
