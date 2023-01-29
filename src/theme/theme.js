import { createTheme } from "@mui/material";

export const theme = createTheme({
  // change MUI default theme
  palette: {
    primary: {
      main: "#0ABF53",
    },
    secondary: {
      main: "#50ADBB",
    },
    neutral: {
      main: '#E2E8F0',
      contrastText: '#475467',
    },
  },

  //create custom theme
  custom: {
    font: {
      sans: `'Open Sans', sans-serif`,
    },

    br: {
      xs: "6px",
      sm: "10px",
    },

    colors: {
      primary: "#0ABF53", // green 400
      secondary: "#50ADBB", // cyan 600
      sec200: "#15AABF",
      sec100: "#306870",

      text900: "#FFFFFF", // white
      text200: "#909296",
      text100: "#5C5F66",
    },

    breakpoints: {
      sm: "600px",
      md: "900px",
      lg: "1200px",
    },

    shadow: {
      sm: " 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
      md: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      lg: " 0 25px 50px -12px rgb(0 0 0 / 0.25)",
    },
  },
});

// MUI Breakpoints
// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px
