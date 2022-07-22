import { useState } from "react";

import context from "./Context";

function ContextProvider(props) {
  const [state, setState] = useState({
    isBangla: true,
    listning: false,
    text: "",
    isCopied: false,
  });

  return (
    <context.Provider value={{ state, setState }}>
      {props.children}
    </context.Provider>
  );
}

export default ContextProvider;
