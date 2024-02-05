import React from "react";
import ReactDOM from "react-dom";
import "./popup.css";
import RulesHelperPopup from "../components/RulesHelperPopup/RulesHelperPopup";

const App = () => {
  return (
    <div>
      <RulesHelperPopup />
    </div>
  );
};

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<App />, root);
