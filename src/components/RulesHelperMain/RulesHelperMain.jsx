import React, { useState } from "react";
import "./RulesHelperMain.css";
import Button from "../Button/Button";
import { IoMdClose } from "react-icons/io";
import { FaRegFaceSmileBeam } from "react-icons/fa6";
import {
  useCopyButtonsData,
  usePropertiesCopyButtonsData,
} from "../../hooks/useCopyButtonsData";
import scanForRules from "../../fetch";
import scanForProperties from "../../propertyFetch";
import CopyButton from "../CopyButton/CopyButton";
import { TiArrowSortedDown } from "react-icons/ti";
import { copyButtonsConfig, propertiesCopyButtonsConfig } from "../../utils";

const RulesHelperMain = () => {
  const data = scanForRules();
  const { propData } = scanForProperties();
  const copyButtonsData = useCopyButtonsData(data, copyButtonsConfig);

  const [isHidden, setIsHidden] = useState(true);

  const [rulesTabOpen, setRulesTabOpen] = useState(true);
  const [propertiesTabOpen, setPropertiesTabOpen] = useState(false);

  const handleVisibilityToggle = (shouldHide) => {
    setIsHidden(shouldHide);
  };

  const handleTabClick = (tabName) => {
    if (tabName === "rules" && !rulesTabOpen) {
      setRulesTabOpen(true);
      setPropertiesTabOpen(false);
    } else if (tabName === "properties" && !propertiesTabOpen) {
      setPropertiesTabOpen(true);
      setRulesTabOpen(false);
    }
  };

  const displayRules = (data.productTitle &&
    copyButtonsData.map((buttonData, index) => (
      <div key={index} className="rulesHelperButtonContainer">
        <CopyButton
          key={index}
          textToCopy={buttonData.textToCopy}
          buttonText={buttonData.buttonText}
        />
      </div>
    ))) || <div>No rules found</div>;

  const displayProperties = propData?.map((element, index) => {
    const propertiesCopyButtonsData = usePropertiesCopyButtonsData(
      propData,
      index,
      propertiesCopyButtonsConfig
    );
    return (
      <div key={index} className="propertiesContainer">
        <div className="label">{element.name}</div>
        {propertiesCopyButtonsData.map((buttonData, index) => {
          return (
            <div key={index} className="rulesHelperButtonContainer">
              <CopyButton
                key={index}
                textToCopy={buttonData.textToCopy}
                buttonText={buttonData.buttonText}
              />
            </div>
          );
        })}
      </div>
    );
  }) || <div>No properties found</div>;

  return (
    <>
      <div
        id="rulesHelperMain"
        style={{ display: isHidden ? "none" : "block" }}
      >
        <div className="navbar">
          <div className="tabs">
            <div className="rulesContainerTab">
              <Button
                width="max-content"
                className="rulesButton"
                title="Open Rules Tab"
                onClick={() => handleTabClick("rules")}
              >
                Rules
              </Button>
              {rulesTabOpen ? <TiArrowSortedDown /> : null}
            </div>
            <div className="propertiesContainerTab">
              <Button
                width="max-content"
                className="propertiesButton"
                title="Open Properties Tab"
                onClick={() => handleTabClick("properties")}
              >
                Properties
              </Button>
              {propertiesTabOpen ? <TiArrowSortedDown /> : null}
            </div>
          </div>

          <div className="rulesHelperCloseContainer">
            <Button
              width="max-content"
              className="rulesHelperCloseButton"
              title="Close Rules Helper Window"
              onClick={() => handleVisibilityToggle(true)}
            >
              <IoMdClose />
            </Button>
          </div>
        </div>

        {rulesTabOpen && displayRules}
        {propertiesTabOpen && displayProperties}
      </div>
      <div
        id="rulesHelperOpenMain"
        style={{ display: isHidden ? "block" : "none" }}
      >
        <Button
          className="rulesHelperOpenButton"
          onClick={() => handleVisibilityToggle(false)}
        >
          <FaRegFaceSmileBeam />
          <span>Rules Available</span>
        </Button>
      </div>
    </>
  );
};

export default RulesHelperMain;
