export const styles = `
@import url("https://fonts.googleapis.com/css2?family=MuseoModerno:wght@300;400;500;700&display=swap");

:root {
  /* Rules Helper Window */

  --bg-primary: #f8f8ff;
  --bg-danger: #ff0000;
  --border-outline: #d8b4e2;
  --padding: 20px;
  --border-radius: 5px;
  --width: 300px;
  --max-height: 500px;
  --box-shadow: 0px 0px 5px rgba(216, 180, 226, 0.3);
  --svg-transform-scale: scale(1.4);
  --btn-container-width: 100%;
  --color: #f8f8ff;
  --dark-color: #000000;
  --font-size: 16px;

  /* Button */

  --btn-min-height: 40px;
  --btn-bg-color: #301934;
  --btn-color: #f8f8ff;
  --btn-border-radius: 3px;
  --btn-hover-bg-color: #c699d1;
}

[id^="rulesHelper"] {
  font-family: "MuseoModerno", sans-serif;
  /* font-family: "Montserrat", sans-serif !important; */
  font-weight: 500 !important;
  height: fit-content !important;
  z-index: 9999999999 !important;
}

[id^="rulesHelper"] svg {
  transform: var(--svg-transform-scale);
}
#rulesHelperMain svg {
  margin: 0px;
}

#rulesHelperMain {
  position: fixed;
  top: 10%;
  right: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--bg-primary);
  padding: var(--padding);
  border: 1px solid var(--border-outline);
  border-radius: 5px;
  box-shadow: var(--box-shadow);
  width: var(--width);
  max-height: var(--max-height);
  overflow: scroll;
}

#rulesHelperMain::-webkit-scrollbar {
  display: none;
}

#rulesHelperMain .navbar {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

#rulesHelperMain .navbar .tabs {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
}

#rulesHelperMain .navbar .tabs > div[class$="ContainerTab"] {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#rulesHelperMain .navbar .tabs > div[class$="ContainerTab"] > svg {
  color: var(--btn-bg-color);
}

#rulesHelperMain .propertiesContainer {
  border: 1px solid var(--border-outline);
  padding: 10px;
  margin-top: 15px;
}

#rulesHelperMain .propertiesContainer div.label {
  color: var(--dark-color);
  text-transform: capitalize;
  font-size: var(--font-size);
  margin-top: -23px;
  background-color: var(--bg-primary);
  width: max-content;
  padding: 0 5px;
}

#rulesHelperMain .rulesHelperCloseContainer .rulesHelperCloseButton {
  color: var(--color);
}

#rulesHelperMain .rulesHelperCloseContainer .rulesHelperCloseButton:hover {
  background: var(--bg-danger);
  transition: all 0.1s ease-in-out;
}

#rulesHelperMain .rulesHelperCloseContainer .rulesHelperCloseButton:active,
#rulesHelperCustomButton.custom-button:active {
  transform: scale(0.95);
}

#rulesHelperMain .rulesHelperButtonContainer {
  width: var(--btn-container-width);
  margin-top: 10px;
}

#rulesHelperOpenMain {
  position: fixed;
  margin: 0;
  top: 75%;
  right: 0%;
}

#rulesHelperOpenMain .rulesHelperOpenButton > span {
  line-height: 1.5;
}

#rulesHelperMain .navigationButtonsContainer {
  width: 100%;
  border: 1px solid darksalmon;
  margin-top: 12px;
  padding: 5px;
  display: flex;
  gap: 5px;
}

#rulesHelperMain .navigationButtonsContainer .navigationButton {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 40px;
  color: #f8f8ff;
  font-size: 18px;
  background-color: #a952c2;
  border-radius: 3px;
}

#rulesHelperCustomButton.custom-button {
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  min-height: var(--btn-min-height);
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: var(--btn-bg-color);
  color: var(--btn-color);
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: var(--btn-border-radius);
  font-size: var(--font-size);
}

#rulesHelperCustomButton.custom-button:hover {
  background-color: var(--btn-hover-bg-color);
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
  transition: all 0.1s ease-in-out;
}

`;
