import React from "react";
import ReactDOM from "react-dom";
import "./popup.css";
import RulesHelperPopup from "../components/RulesHelperPopup/RulesHelperPopup";

const App = () => {
  return (
    <div style={{all: "initial"}}>
      <RulesHelperPopup />
    </div>
  );
};

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<App />, root);
