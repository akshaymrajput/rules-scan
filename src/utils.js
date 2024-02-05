const complexityType = {
  SIMPLE: "SIMPLE", // return the string as is
  INSIDE_SQ_BRACKETS: "INSIDE_SQ_BRACKETS", // need to exec a function to get the string inside sq brackets
  SPECIAL: {
    Pattern_A: "name__",
    Pattern_B: "",
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

module.exports = {
  complexityType,
  getAnythingBetweenSquareBrackets,
  getNameUsingPatternA,
  getNameUsingPatternB,
};
