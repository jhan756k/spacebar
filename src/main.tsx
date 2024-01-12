import React from "react";
import ReactDOM from "react-dom/client";
import globalStyles from "./main.ts";
import App from "./App.tsx";
import { Global } from "@emotion/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <App />
  </React.StrictMode>
);
