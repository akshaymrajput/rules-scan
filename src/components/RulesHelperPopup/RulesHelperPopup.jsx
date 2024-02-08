import React, { useState } from "react";
import "./RulesHelperPopup.css";
import Button from "../Button/Button";
import { FaAnglesDown, FaAnglesUp, FaRegCopy } from "react-icons/fa6";
import CopyButton from "../CopyButton/CopyButton";

import {
  skeleton,
  propertiesSkeleton,
  propertiesSkeletonDataConfig,
} from "./popup_data";

const RulesHelperPopup = () => {
  const [showProperties, setShowProperties] = useState(false);

  const handlePropertiesClick = () => {
    setShowProperties(!showProperties);
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
            {propertiesSkeletonDataConfig.map((item) => (
              <CopyButton
                className="propertiesBtn"
                textToCopy={item.textToCopy}
                buttonText={item.buttonText}
                showCopyIcon={item.showCopyIcon}
              />
            ))}
          </div>
        ) : null}
      </section>
      <section>
        <h2 className="title">Misc</h2>
        {/* <div id="tools-grid">
          <div>
            <CopyButton
              className="toolsBtn"
              textToCopy={propertiesSkeletonDataConfig.div_button_a_img}
              buttonText="div_button-a"
              showCopyIcon={false}
            />
          </div>
          <div>
            <CopyButton
              className="toolsBtn"
              textToCopy={propertiesSkeletonDataConfig.div_button_a_img}
              buttonText="div_button-a"
              showCopyIcon={false}
            />
          </div>
          <div>
            <CopyButton
              className="toolsBtn"
              textToCopy={propertiesSkeletonDataConfig.div_button_a_img}
              buttonText="div_button-a"
              showCopyIcon={false}
            />
          </div>
          <div>
            <CopyButton
              className="toolsBtn"
              textToCopy={propertiesSkeletonDataConfig.div_button_a_img}
              buttonText="div_button-a"
              showCopyIcon={false}
            />
          </div>
          <div>
            <CopyButton
              className="toolsBtn"
              textToCopy={propertiesSkeletonDataConfig.div_button_a_img}
              buttonText="div_button-a"
              showCopyIcon={false}
            />
          </div>
          <div>
            <CopyButton
              className="toolsBtn"
              textToCopy={propertiesSkeletonDataConfig.div_button_a_img}
              buttonText="div_button-a"
              showCopyIcon={false}
            />
          </div>
          <div>
            <CopyButton
              className="toolsBtn"
              textToCopy={propertiesSkeletonDataConfig.div_button_a_img}
              buttonText="div_button-a"
              showCopyIcon={true}
            />
          </div>
          <div>
            <CopyButton
              className="toolsBtn"
              textToCopy={propertiesSkeletonDataConfig.div_button_a_img}
              buttonText="div_button-a"
              showCopyIcon={false}
            />
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default RulesHelperPopup;
