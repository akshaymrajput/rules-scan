const complexityType = {
  SIMPLE: "SIMPLE", // return the string as is
  INSIDE_SQ_BRACKETS: "INSIDE_SQ_BRACKETS", // need to exec a function to get the string inside sq brackets
  SPECIAL: {
    Pattern_A: "name__",
    Pattern_B: "ending_with_-selector",
  },
};

const getNameUsingPatternA = (string) => {
  const match = string.match(/name__([^ ]+)/);
  if (!match) {
    return string;
  }
  return match ? match[1] : null;
};

const getNameUsingPatternB = (string) => {
  const match = string.match(/\b\w+\b(?=\W+\w+\W*$)/);
  if (!match) {
    return string;
  }
  return match ? match[0] : null;
};

const getAnythingBetweenSquareBrackets = (string) => {
  const match = string.match(/\[(.*?)\]/);
  if (!match) {
    return string;
  }
  return match ? match[1] : null;
};

const copyButtonsConfig = [
  { textToCopy: "productTitle", buttonText: "Product Title" },
  { textToCopy: "description", buttonText: "Description" },
  { textToCopy: "mainImage", buttonText: "Main Image" },
  { textToCopy: "itemImages", buttonText: "Item Images" },
  { textToCopy: "productPrice", buttonText: "Product Price" },
  { textToCopy: "productOriginalPrice", buttonText: "Product Original Price" },
  { textToCopy: "stockStatus", buttonText: "Stock Status" },
];

const propertiesCopyButtonsConfig = [
  { textToCopy: "getter", buttonText: "Property Getter" },
  { textToCopy: "setter", buttonText: "Property Setter" },
  { textToCopy: "stockGetter", buttonText: "Property Stock Getter" },
];

module.exports = {
  complexityType,
  copyButtonsConfig,
  propertiesCopyButtonsConfig,
  getAnythingBetweenSquareBrackets,
  getNameUsingPatternA,
  getNameUsingPatternB,
};
