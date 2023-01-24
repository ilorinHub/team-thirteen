import "styled-components";
import { Theme } from "@mui/material/styles";

interface CustomTheme {
  custom: {
    // border radius
    br: {
      xs: string;
      sm: string;
    };

    // colors
    colors: {
      primary: string;
      secondary: string;
      sec200: string;
      sec100: string;
      tert?: string;
      body: string; // page background color

      text900: string;
      text200: string;
    };

    breakpoints: {
      sm: string;
      md: string;
      lg: string;
    };

    // can extend properties below
  };
}

declare module "@mui/material/styles" {
  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}
}

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

// Now MUI has custom variables, and also styled-components also inherits Material-ui’s Theme object, making them sync
