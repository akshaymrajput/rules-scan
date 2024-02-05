import React, { useState } from "react";
import "./RulesHelperPopup.css";
import Button from "../Button/Button";
import { FaAnglesDown, FaAnglesUp, FaRegCopy } from "react-icons/fa6";
import CopyButton from "../CopyButton/CopyButton";

import { coupons, skeleton } from "./popup_data";

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
            <Button className="propertiesBtn">
              select-option <FaRegCopy />
            </Button>
            <Button className="propertiesBtn">
              ul-li <FaRegCopy />
            </Button>
            <Button className="propertiesBtn">
              div-button/a/img <FaRegCopy />
            </Button>
            <Button className="propertiesBtn">
              div-input <FaRegCopy />
            </Button>
          </div>
        ) : null}
      </section>
      <section>
        <h2 className="title">Tools</h2>
        <Button className="propertiesToggleBtn" onClick={handleToolsClick}>
          Select Tools
          {showTools ? <FaAnglesUp /> : <FaAnglesDown />}
        </Button>
        {showTools ? (
          <div id="tools-grid">
            <Button className="toolsBtn">
              select-option <FaRegCopy />
            </Button>
            <Button className="toolsBtn">
              ul-li <FaRegCopy />
            </Button>
            <Button className="toolsBtn">
              div-button/a/img <FaRegCopy />
            </Button>
            <Button className="toolsBtn">
              div-input <FaRegCopy />
            </Button>
          </div>
        ) : null}
      </section>
      <section>
        <h2 className="title">Check for Coupons</h2>
        <CopyButton
          className="couponsCheckBtn"
          textToCopy={skeleton.rules}
          buttonText="Coupons Found!"
        ></CopyButton>
      </section>
    </div>
  );
};

export default RulesHelperPopup;
