import React, { useState } from "react";
import "./RulesHelperMain.css";
import Button from "../Button/Button";
import { IoMdClose } from "react-icons/io";
import { FaRegFaceSmileBeam } from "react-icons/fa6";
import { useCopyButtonsData } from "../../hooks/useCopyButtonsData";
import { usePropertiesCopyButtonsData } from "../../hooks/usePropertiesCopyButtonsData";
import scanForRules from "../../fetch";
import scanForProperties from "../../propertyFetch";
import CopyButton from "../CopyButton/CopyButton";
import { TiArrowSortedDown } from "react-icons/ti";

const RulesHelperMain = () => {
  const data = scanForRules();
  const { propData } = scanForProperties();
  const copyButtonsData = useCopyButtonsData(data);

  console.log(propData);

  const [isHidden, setIsHidden] = useState(true);

  const [rulesTabOpen, setRulesTabOpen] = useState(true);
  const [propertiesTabOpen, setPropertiesTabOpen] = useState(false);

  const handleCloseClick = () => {
    setIsHidden(true);
  };

  const handleOpenClick = () => {
    setIsHidden(false);
  };

  const handleRulesClick = () => {
    if (!rulesTabOpen) {
      setRulesTabOpen(true);
      setPropertiesTabOpen(false);
    }
  };
  const handlePropertiesClick = () => {
    if (!propertiesTabOpen) {
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

  console.log(propData);

  const displayProperties = propData?.map((element, index) => {
    const propertiesCopyButtonsData = usePropertiesCopyButtonsData(
      propData,
      index
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
                onClick={handleRulesClick}
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
                onClick={handlePropertiesClick}
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
              onClick={handleCloseClick}
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
        <Button className="rulesHelperOpenButton" onClick={handleOpenClick}>
          <FaRegFaceSmileBeam />
          <span>Rules Available</span>
        </Button>
      </div>
    </>
  );
};

export default RulesHelperMain;
