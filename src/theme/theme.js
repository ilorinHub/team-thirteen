import { createTheme } from "@mui/material";

export const theme = createTheme({
    // change MUI default theme
    palette: {
        primary: {
            main: '#32D583'
        },
        secondary: {
            main: '#50ADBB'
        }
    },

    //create custom theme
    custom: {
        br: {
            xs: '6px',
            sm: '10px',
        },

        colors: {
            primary: '#32D583', // green 400
            secondary: '#50ADBB', // cyan 600
            sec200: '#15AABF',
            sec100: '#306870',

            text900: '#FFFFFF', // white
            text200: '#909296',
        },

        breakpoints: {
            sm: '600px',
            md: '900px',
            lg: '1200px',
        }
    }
});


// MUI Breakpoints
// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px