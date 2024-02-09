import React from "react";
import ReactDOM from "react-dom";
import "./popup.css";
import RulesHelperPopup from "../components/RulesHelperPopup/RulesHelperPopup";

const App = () => {
  return (
    <div id="popup" style={{ all: "initial" }}>
      <style>
        {`@import
        url("https://fonts.googleapis.com/css2?family=MuseoModerno:wght@300;400;500;700&display=swap");
        `}
      </style>
      <RulesHelperPopup />
    </div>
  );
};

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<App />, root);
