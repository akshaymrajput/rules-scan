import { useMemo } from "react";

export const useCopyButtonsData = (data, config) => {
  const copyButtonsData = useMemo(
    () =>
      config.map((item) => ({
        textToCopy: data[item.textToCopy],
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
        textToCopy: propdata[index]?.[item.textToCopy],
        buttonText: item.buttonText,
      })),
    [config, propdata, index]
  );

  return propertiesCopyButtonsData;
};
