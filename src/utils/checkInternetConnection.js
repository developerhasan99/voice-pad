const checkInternetConnection = (state, setState) => {
  window.addEventListener("online", function () {
    setState({ ...state, isOnline: true, showOnlineSnack: true });
  });
  window.addEventListener("offline", function () {
    setState({ ...state, isOnline: false });
  });
};

export default checkInternetConnection;
