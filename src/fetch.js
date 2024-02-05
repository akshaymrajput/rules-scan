import data from "./data";
import * as jQuery from "jquery";

const scanForRules = () => {
  let dataToSend = {
    productTitle: "",
    description: `jQuery('meta[name="description"]').attr("content")?.trim() ||
    jQuery('meta[property="og:description"]:first').attr("content")?.trim();`,
    mainImage: "",
    itemImages: "",
    productPrice: "",
    productOriginalPrice: "",
    stockStatus: "",
  };

  for (const condition of data) {
    const { conditions, data } = condition;

    const allConditionsMet = Object.values(conditions).every((condition) =>
      condition.some((subSelector) => jQuery(subSelector).length > 0)
    );

    if (allConditionsMet) {
      dataToSend = {
        ...dataToSend,
        productTitle: data.productTitle,
        mainImage: data.mainImage,
        itemImages: data.itemImages,
        productPrice: data.productPrice,
        productOriginalPrice: data.productOriginalPrice,
        stockStatus: data.stockStatus,
      };
      return dataToSend;
    }
  }

  return dataToSend;
};

export default scanForRules;
