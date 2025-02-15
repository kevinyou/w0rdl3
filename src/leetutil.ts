export const leet = "leet";

export const normalToLeet = (str: string) => {
  return str
    .split("")
    .map((char) => {
      switch (char) {
        case "e":
          return "3";
        case "t":
          return "+";
        case "i":
          return "1";
        case "o":
          return "0";
        case "a":
          return "@";
        case "s":
          return "$";
        case "c":
          return "(";
        case "b":
          return "6";
        default:
          return char;
      }
    })
    .join('');
};

export const leetToNormal = (str: string) => {
  return str
    .split("")
    .map((char) => {
      switch (char) {
        case "3":
          return "e";
        case "+":
          return "t";
        case "1":
          return "i";
        case "0":
          return "o";
        case "@":
          return "a";
        case "$":
          return "s";
        case "(":
          return "c";
        case "6":
          return "b";
        default:
          return char;
      }
    })
    .join('');
};

