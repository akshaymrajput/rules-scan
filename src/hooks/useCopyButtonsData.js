import { useMemo } from "react";

export const useCopyButtonsData = (data, config) => {
  const copyButtonsData = useMemo(
    () =>
      config.map((item) => ({
        textToCopy: data[item.property],
        buttonText: item.buttonText,
      })),
    [config, data]
  );

  return copyButtonsData;
};

export const usePropertiesCopyButtonsData = (propdata, index, config) => {
  const propertiesCopyButtonsData = useMemo(
    () =>
      config.map((item) => ({
        textToCopy: propdata[index]?.[item.property],
        buttonText: item.buttonText,
      })),
    [config, propdata, index]
  );

  return propertiesCopyButtonsData;
};


/*
import { useMemo } from "react";

export const useCopyButtonsData = (data) => {
  const copyButtonsData = useMemo(
    () => [
      {
        textToCopy: data.productTitle,
        buttonText: "Product Title",
      },
      {
        textToCopy: data.description,
        buttonText: "Description",
      },
      {
        textToCopy: data.mainImage,
        buttonText: "Main Image",
      },
      {
        textToCopy: data.itemImages,
        buttonText: "Item Images",
      },
      {
        textToCopy: data.productPrice,
        buttonText: "Product Price",
      },
      {
        textToCopy: data.productOriginalPrice,
        buttonText: "Product Original Price",
      },
      {
        textToCopy: data.stockStatus,
        buttonText: "Stock Status",
      },
    ],
    [data]
  );

  return copyButtonsData;
};

*/