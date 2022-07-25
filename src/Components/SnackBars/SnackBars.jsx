import OnlineSnack from "./OnlineSnack";
import OfflineSnack from "./OfflineSnack";
import CopySnack from "./CopySnack";
import MicSnack from "./MicSnack";

function SnackBars() {
  return (
    <div>
      <OnlineSnack />
      <OfflineSnack />
      <CopySnack />
      <MicSnack />
    </div>
  );
}

export default SnackBars;
