export const styles = `
@import url("https://fonts.googleapis.com/css2?family=MuseoModerno:wght@300;400;500;700&display=swap");

[id^="rulesHelper"] {
  font-family: "MuseoModerno", sans-serif;
  /* font-family: "Montserrat", sans-serif !important; */
  font-weight: 500 !important;
  height: fit-content !important;
  z-index: 9999999999 !important;
}

[id^="rulesHelper"] svg {
  transform: var(--rules-helper__svg-transform-scale);
}
#rulesHelperMain svg {
  margin: 0px;
}

#rulesHelperMain .drag {
  height: 10px;
  width: 100%;
}

#rulesHelperMain .drag:hover {
  cursor: move;
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;
}

#rulesHelperMain .drag:active {
  cursor: grabbing;
  cursor: -moz-grabbing;
  cursor: -webkit-grabbing;
}

#rulesHelperMain .container {
  padding: var(--rules-helper__padding-container);
  background: var(--rules-helper__bg-primary);
}

#rulesHelperMain {
  position: fixed;
  top: 10%;
  right: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--rules-helper__bg-dark);
  padding: var(--rules-helper__padding-outer);
  border: 1px solid var(--rules-helper__border-outline);
  border-radius: 5px;
  box-shadow: var(--rules-helper__box-shadow);
  width: var(--rules-helper__width);
  max-height: var(--rules-helper__max-height);
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
  color: var(--rules-helper__btn-bg-color);
}

#rulesHelperMain .propertiesContainer {
  border: 1px solid var(--rules-helper__border-outline-prop);
  padding: 10px;
  margin-top: 15px;
}

#rulesHelperMain .propertiesContainer div.label {
  color: var(--rules-helper__dark-color);
  text-transform: capitalize;
  font-size: var(--rules-helper__font-size);
  margin-top: -23px;
  background-color: var(--rules-helper__bg-primary);
  width: max-content;
  padding: 0 5px;
}

#rulesHelperMain .rulesHelperCloseContainer .rulesHelperCloseButton {
  color: var(--rules-helper__color);
}

#rulesHelperMain .rulesHelperCloseContainer .rulesHelperCloseButton:hover {
  background: var(--rules-helper__bg-danger);
  color: var(--rules-helper__dark-color);
  transition: all 0.1s ease-in-out;
}

#rulesHelperMain .rulesHelperCloseContainer .rulesHelperCloseButton:active,
#rulesHelperCustomButton.custom-button:active {
  transform: scale(0.95);
}

#rulesHelperMain .rulesHelperButtonContainer {
  width: var(--rules-helper__btn-container-width);
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

#rulesHelperCustomButton.custom-button {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  min-height: var(--rules-helper__btn-min-height);
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: var(--rules-helper__btn-bg-color);
  color: var(--rules-helper__btn-color);
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: var(--rules-helper__btn-border-radius);
  font-size: var(--rules-helper__font-size);
}

#rulesHelperCustomButton.custom-button:hover {
  background-color: var(--rules-helper__btn-hover-bg-color);
  color: var(--rules-helper__dark-color);
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
  transition: all 0.1s ease-in-out;
}

`;
