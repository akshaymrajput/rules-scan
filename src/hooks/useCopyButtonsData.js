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
