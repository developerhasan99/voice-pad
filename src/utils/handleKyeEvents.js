const handleKyeEvents = (state, setState) => {
  window.onkeydown = function (e) {
    if (e.altKey && e.key === "z") {
      setState({
        ...state,
        isListening: !state.isListening,
      });
    }
  };
};

export default handleKyeEvents;
