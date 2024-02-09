import React, { useState } from "react";
import "./RulesHelperPopup.css";
import Button from "../Button/Button";
import { FaAnglesDown, FaAnglesUp } from "react-icons/fa6";
import CopyButton from "../CopyButton/CopyButton";

import {
  skeleton,
  propertiesSkeletonDataConfig,
  toolsDataConfig,
} from "./popup_data";

const PropertiesButtons = ({ properties }) => (
  <div id="properties-grid">
    {properties.map((item) => (
      <CopyButton
        key={item.buttonText}
        className="propertiesBtn"
        textToCopy={item.textToCopy}
        buttonText={item.buttonText}
        showCopyIcon={item.showCopyIcon}
      />
    ))}
  </div>
);

const ToolsButtons = ({ tools }) => (
  <div id="tools-grid">
    {tools.map((item) => (
      <div className="toolItem" key={item.buttonText}>
        <CopyButton
          key={item.buttonText}
          className="toolsBtn"
          textToCopy={item.textToCopy}
          buttonText={item.buttonText}
          showCopyIcon={item.showCopyIcon}
        />
      </div>
    ))}
  </div>
);

const RulesHelperPopup = () => {
  const [showProperties, setShowProperties] = useState(false);

  const handlePropertiesClick = () => {
    setShowProperties(!showProperties);
  };

  return (
    <div id="rules-popup">
      <header>
        <div>Static Reusable Data</div>
      </header>
      <section>
        <h2 className="title">Rules</h2>
        <CopyButton
          className="rulesSkeletonBtn"
          textToCopy={skeleton.rules}
          buttonText="Copy Rules Skeleton"
          showCopyIcon={true}
        ></CopyButton>
      </section>
      <section>
        <h2 className="title">Properties</h2>
        <Button className="propertiesToggleBtn" onClick={handlePropertiesClick}>
          Select Properties Skeleton
          {showProperties ? <FaAnglesUp /> : <FaAnglesDown />}
        </Button>
        {showProperties ? (
          <PropertiesButtons properties={propertiesSkeletonDataConfig} />
        ) : null}
      </section>
      <section>
        <h2 className="title">Snippets</h2>
        <ToolsButtons tools={toolsDataConfig} />
      </section>
    </div>
  );
};

export default RulesHelperPopup;
