import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./components/App";
import "./styles/style.scss";

const ROOT = document.getElementById("root");

ReactDOM.render(
  <App compiler="TypeScript" framework="React" />,
  ROOT
);

if((module as any).hot)
  (module as any).hot.accept()