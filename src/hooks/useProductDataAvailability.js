import { useEffect, useState } from "react";
import scanForRules from "../fetch";
import scanForProperties from "../propertyFetch";

export const useProductDataAvailability = () => {
  const [isProductDataAvailable, setIsProductDataAvailable] = useState(false);

  useEffect(() => {
    const checkProductData = () => {
      const receivedDataOfCurrentPage = scanForRules();
      const receivedPropsDataOfCurrentPage = scanForProperties();

      let productDataAvailable = false;

      if (
        (receivedDataOfCurrentPage &&
          receivedDataOfCurrentPage.productTitle &&
          receivedDataOfCurrentPage.productTitle.length > 0 &&
          receivedDataOfCurrentPage.productPrice.length > 0 &&
          receivedDataOfCurrentPage.mainImage) ||
        (receivedPropsDataOfCurrentPage &&
          receivedPropsDataOfCurrentPage.propData)
      ) {
        productDataAvailable = true;
      }

      setIsProductDataAvailable(productDataAvailable);

      if (!productDataAvailable) {
        setTimeout(checkProductData, 3000);
      }
    };

    checkProductData();

    // Send a message to the background script to check on URL change
    chrome.runtime.sendMessage({ type: "checkURLChange" });

    // Listen for messages from the background script
    const messageListener = (message) => {
      if (message.type === "updateProductData") {
        checkProductData();
      }
    };
    chrome.runtime.onMessage.addListener(messageListener);

    // Cleanup function
    return () => {
      // Clear any ongoing setTimeout timers
      clearTimeout(checkProductData);

      // Remove message listener
      chrome.runtime.onMessage.removeListener(messageListener);
    };
  }, []);

  return isProductDataAvailable;
};
