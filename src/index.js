import React from "react";
import ReactDOM from "react-dom";

import Resume from "./resume";

import "./style2.css";

function App() {
  return (
    <div className="App">
      <Resume />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
