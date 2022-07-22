function Status() {
  return (
    <p>
      Status:{" "}
      {state.listning ? "Listening..." : 'Press "Alt+z" to start voice typing!'}
    </p>
  );
}

export default Status;
