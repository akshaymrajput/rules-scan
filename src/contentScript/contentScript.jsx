import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import RulesHelperMain from "../components/RulesHelperMain/RulesHelperMain";
import { useProductDataAvailability } from "../hooks/useProductDataAvailability";
import ReactShadowRoot from "react-shadow-root";
import { styles } from "../styles";

const ContentScript = () => {
  const [isDOMLoaded, setIsDOMLoaded] = useState(false);
  const isProductDataAvailable = useProductDataAvailability();

  useEffect(() => {
    const handleDOMLoad = () => {
      setIsDOMLoaded(true);
    };

    if (document.readyState === "complete") {
      setIsDOMLoaded(true);
    } else {
      window.addEventListener("load", handleDOMLoad);
    }

    return () => {
      window.removeEventListener("load", handleDOMLoad);
    };
  }, []);

  return (
    <>
      {isDOMLoaded && isProductDataAvailable && (
        <ReactShadowRoot>
          <style>{styles}</style>
          <RulesHelperMain />
        </ReactShadowRoot>
      )}
    </>
  );
};

const root = document.createElement("div");
root.classList.add("__rules_helper_extension__");
root.style.display = "block";
root.setAttribute("style", "all: initial;");
document.body.appendChild(root);
ReactDOM.render(<ContentScript />, root);
