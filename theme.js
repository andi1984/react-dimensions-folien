const white = "#fffceb";
const black = "#11111f";
const blue = "#2d5dd7";

export default {
  font: '"Crimson Text", serif',
  googleFont: "https://fonts.googleapis.com/css?family=Crimson+Text",
  monospace: "Menlo, monospace",

  colors: {
    text: black,
    background: white,
    link: blue,
    pre: "#000",
    preBackground: "#333",
    code: "#000"
  },
  css: {
    fontSize: "1.5em",
    textAlign: "left",
    "@media screen and (min-width:56em)": {
      fontSize: "32px"
    },
    "@media screen and (min-width:64em)": {
      fontSize: "3em"
    },
    "@media print": {
      fontSize: "40px"
    },
    "li > p": {
      margin: 0
    }
  },
  pre: {
    textAlign: "left"
  },
  ol: {
    textAlign: "left"
  },
  ul: {
    textAlign: "left"
  },
  Slide: {
    "& > div": {
      minWidth: "80vw",
      minHeight: "60vh"
    }
  }
};
