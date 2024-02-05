import propertyData from "./propertyData";
import * as jQuery from "jquery";
import {
  complexityType,
  getAnythingBetweenSquareBrackets,
  getNameUsingPatternA,
  getNameUsingPatternB,
} from "./utils";

const REPLACE_ME = "REPLACE_ME";

const getPropName = (propSelector, propDetails) => {
  let totalProperties = [];
  let properties = jQuery(propSelector);

  for (let property of properties) {
    let name;
    console.log(property);
    let firstResult =
      jQuery(property).find(propDetails.name).attr(propDetails.attr) ||
      jQuery(property).attr(propDetails.attr) ||
      jQuery(property).find(propDetails.name).text().trim();

    switch (propDetails.complexity) {
      case complexityType.SIMPLE:
        name = firstResult;
        break;
      case complexityType.INSIDE_SQ_BRACKETS:
        name = getAnythingBetweenSquareBrackets(firstResult);
        break;
      case complexityType.SPECIAL.Pattern_A:
        name = getNameUsingPatternA(firstResult);
        break;
      case complexityType.SPECIAL.Pattern_B:
        name = getNameUsingPatternB(firstResult);
        break;
      default:
        name = firstResult;
        break;
    }

    totalProperties.push({
      name,
    });
  }
  return totalProperties;
};

const scanForProperties = () => {
  let dataToSend = {
    propData: null,
    propGetter: "",
    propSetter: "",
    propStockGetter: "",
  };

  let currentPropData;

  for (const condition of propertyData) {
    const { conditions, data } = condition;

    const allConditionsMet = Object.values(conditions).every((condition) =>
      condition.some((subSelector) => {
        if (jQuery(subSelector).length > 0) {
          currentPropData = getPropName(subSelector, data.propDetails);
          return true;
        } else {
          return false;
        }
      })
    );

    if (allConditionsMet) {
      let getter = data.propGetter;
      let setter = data.propSetter;
      let stockGetter = data.propStockGetter;

      const currentPageProps = [];

      for (const propData of currentPropData) {
        const { name } = propData;
        const properties = {
          name,
          getter: getter.replaceAll(REPLACE_ME, name),
          setter: setter.replaceAll(REPLACE_ME, name),
          stockGetter: stockGetter.replaceAll(REPLACE_ME, name),
        };
        currentPageProps.push(properties);
      }

      console.log("currentPageProps -------------------->" + currentPageProps.getter);

      dataToSend = {
        ...dataToSend,
        propData: currentPageProps,
      };
      return dataToSend;
    }
  }

  return dataToSend;
};

export default scanForProperties;
