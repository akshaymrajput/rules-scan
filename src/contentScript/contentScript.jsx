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
    setIsDOMLoaded(true);
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

// import React, { useEffect, useState } from "react";
// import ReactDOM from "react-dom";
// import RulesHelperMain from "../components/RulesHelperMain/RulesHelperMain";
// import { useProductDataAvailability } from "../hooks/useProductDataAvailability";

// const ContentScript = () => {
//   const [isDOMLoaded, setIsDOMLoaded] = useState(false);
//   const isProductDataAvailable = useProductDataAvailability();

//   // Use useEffect to detect when the DOM is fully loaded
//   useEffect(() => {
//     setIsDOMLoaded(true);
//   }, []);

//   return <>{isDOMLoaded && isProductDataAvailable && <RulesHelperMain />}</>;
// };

// const root = document.createElement("div");
// document.body.appendChild(root);
// ReactDOM.render(<ContentScript />, root);
