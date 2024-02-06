import React, { useState } from "react";
import "./RulesHelperPopup.css";
import Button from "../Button/Button";
import { FaAnglesDown, FaAnglesUp, FaRegCopy } from "react-icons/fa6";
import CopyButton from "../CopyButton/CopyButton";

import { skeleton, propertiesSkeleton } from "./popup_data";

const RulesHelperPopup = () => {
  const [showProperties, setShowProperties] = useState(false);
  const [showTools, setShowTools] = useState(false);

  const handlePropertiesClick = () => {
    setShowProperties(!showProperties);
  };

  const handleToolsClick = () => {
    setShowTools(!showTools);
  };

  return (
    <div id="rules_popup">
      <header>
        <div>Static Reusable Data</div>
      </header>
      <section>
        <h2 className="title">Rules</h2>
        <CopyButton
          className="rulesSkeletonBtn"
          textToCopy={skeleton.rules}
          buttonText="Copy Rules Skeleton"
        ></CopyButton>
      </section>
      <section>
        <h2 className="title">Properties</h2>
        <Button className="propertiesToggleBtn" onClick={handlePropertiesClick}>
          Select Properties Skeleton
          {showProperties ? <FaAnglesUp /> : <FaAnglesDown />}
        </Button>
        {showProperties ? (
          <div id="properties-grid">
            <CopyButton
              className="propertiesBtn"
              textToCopy={propertiesSkeleton.ul_li}
              buttonText="ul_li"
            ></CopyButton>
            <CopyButton
              className="propertiesBtn"
              textToCopy={propertiesSkeleton.select_option}
              buttonText="select_option"
            ></CopyButton>
            <CopyButton
              className="propertiesBtn"
              textToCopy={propertiesSkeleton.div_input}
              buttonText="div_input"
            ></CopyButton>
            <CopyButton
              className="propertiesBtn"
              textToCopy={propertiesSkeleton.div_button_a_img}
              buttonText="div_button-a"
            ></CopyButton>
          </div>
        ) : null}
      </section>
      <section>
        <h2 className="title">Misc</h2>
        <Button className="miscToggleBtn" onClick={handleToolsClick}>
          Misc
          {showTools ? <FaAnglesUp /> : <FaAnglesDown />}
        </Button>
        {showTools ? (
          <div id="tools-grid">
            <CopyButton
              className="toolsBtn"
              textToCopy={propertiesSkeleton.div_button_a_img}
              buttonText="div_button-a"
            ></CopyButton>
            <CopyButton
              className="toolsBtn"
              textToCopy={propertiesSkeleton.div_button_a_img}
              buttonText="div_button-a"
            ></CopyButton>
            <CopyButton
              className="toolsBtn"
              textToCopy={propertiesSkeleton.div_button_a_img}
              buttonText="div_button-a"
            ></CopyButton>
            <CopyButton
              className="toolsBtn"
              textToCopy={propertiesSkeleton.div_button_a_img}
              buttonText="div_button-a"
            ></CopyButton>
            <CopyButton
              className="toolsBtn"
              textToCopy={propertiesSkeleton.div_button_a_img}
              buttonText="div_button-a"
            ></CopyButton>
            <CopyButton
              className="toolsBtn"
              textToCopy={propertiesSkeleton.div_button_a_img}
              buttonText="div_button-a"
            ></CopyButton>
          </div>
        ) : null}
      </section>
    </div>
  );
};

export default RulesHelperPopup;
