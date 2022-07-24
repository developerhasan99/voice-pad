import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import Fallback from "./Fallback";
import "./index.css";

if (
  navigator.userAgent.indexOf("Firefox") != -1 ||
  navigator.userAgent.indexOf("MSIE") != -1
) {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <Fallback />
    </React.StrictMode>
  );
} else {
  const App = lazy(() => import("./App"));
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
