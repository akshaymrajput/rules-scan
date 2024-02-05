import React from "react";
import { FaAnglesDown, FaAnglesUp, FaRegCopy } from "react-icons/fa6";

const Dropdown = (isVisible, title, text, handleClick) => {
  return (
    <section>
      <h2 className="title">{title}</h2>
      <Button className="propertiesToggleBtn" onClick={handleClick}>
        Select Tools
        {isVisible ? <FaAnglesUp /> : <FaAnglesDown />}
      </Button>
      {isVisible ? (
        <div id="dropdown-grid">
          <Button className="dropdownBtn">
            {text} <FaRegCopy />
          </Button>
        </div>
      ) : null}
    </section>
  );
};

export default Dropdown;
