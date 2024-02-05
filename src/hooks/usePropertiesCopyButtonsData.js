import { useMemo } from "react";

export const usePropertiesCopyButtonsData = (propdata, index) => {
  const propertiesCopyButtonsData = useMemo(
    () => [
      {
        textToCopy: propdata[index]?.getter,
        buttonText: "Property Getter",
      },
      {
        textToCopy: propdata[index]?.setter,
        buttonText: "Property Setter",
      },
      {
        textToCopy: propdata[index]?.stockGetter,
        buttonText: "Property Stock Getter",
      },
    ],
    [propdata, index]
  );

  return propertiesCopyButtonsData;
};
