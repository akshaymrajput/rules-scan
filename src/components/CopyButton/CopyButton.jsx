import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa6";
import Button from "../Button/Button";

const CopyButton = ({ textToCopy, buttonText, showCopyIcon }) => {
  const [copySuccess, setCopySuccess] = useState(false);
  const [copyError, setCopyError] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 1000);
      })
      .catch((error) => {
        console.error("Copy to clipboard failed: ", error);
        setCopyError(true);
      });
  };

  return (
    <>
      <Button
        className="rulesHelperCopyButton"
        onClick={copyToClipboard}
        title={`Copy ${buttonText}`}
        showCopyIcon={showCopyIcon}
      >
        {copySuccess ? (
          <span className="rulesHelperSuccess">Copied!</span>
        ) : (
          buttonText
        )}
        {showCopyIcon ? <FaRegCopy /> : null}
      </Button>
      {copyError && (
        <span className="rulesHelperError">
          Copying failed. Please try again.
        </span>
      )}
    </>
  );
};

export default CopyButton;
