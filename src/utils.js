const complexityType = Object.freeze({
  SIMPLE: Symbol("SIMPLE"), // return the string as is
  INSIDE_SQ_BRACKETS: Symbol("INSIDE_SQ_BRACKETS"), // need to exec a function to get the string inside sq brackets
  SPECIAL: {
    Pattern_A: Symbol("prop name starts with name__"),
    Pattern_B: Symbol("ending with -selector"),
    Pattern_C: Symbol("last word where everything split by -"),
  },
});

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

const getNameUsingPatternC = (string) => {
  const match = string.split("-").pop();
  if (!match) {
    return string;
  }
  return match ? match : null;
};

const getAnythingBetweenSquareBrackets = (string) => {
  const match = string.match(/\[(.*?)\]/);
  if (!match) {
    return string;
  }
  return match ? match[1] : null;
};

const copyButtonsConfig = [
  {
    showCopyIcon: true,
    textToCopy: "productTitle",
    buttonText: "Product Title",
  },
  { showCopyIcon: true, textToCopy: "description", buttonText: "Description" },
  { showCopyIcon: true, textToCopy: "mainImage", buttonText: "Main Image" },
  { showCopyIcon: true, textToCopy: "itemImages", buttonText: "Item Images" },
  {
    showCopyIcon: true,
    textToCopy: "productPrice",
    buttonText: "Product Price",
  },
  {
    showCopyIcon: true,
    textToCopy: "productOriginalPrice",
    buttonText: "Product Original Price",
  },
  { showCopyIcon: true, textToCopy: "stockStatus", buttonText: "Stock Status" },
];

const propertiesCopyButtonsConfig = [
  { showCopyIcon: true, textToCopy: "getter", buttonText: "Property Getter" },
  { showCopyIcon: true, textToCopy: "setter", buttonText: "Property Setter" },
  {
    showCopyIcon: true,
    textToCopy: "stockGetter",
    buttonText: "Property Stock Getter",
  },
];

module.exports = {
  complexityType,
  copyButtonsConfig,
  propertiesCopyButtonsConfig,
  getAnythingBetweenSquareBrackets,
  getNameUsingPatternA,
  getNameUsingPatternB,
  getNameUsingPatternC,
};
