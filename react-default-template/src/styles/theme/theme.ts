import { createTheme } from "@mui/material/styles";


const commonThemeOptions = {
  typography: {
    fontFamily: ["Inter"].join(","),
    h1: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: 500,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 500,
    },
    h4: {
      fontSize: "1.25rem",
      fontWeight: 500,
    },
    h5: {
      fontSize: "1rem",
      fontWeight: 500,
    },
    h6: {
      fontSize: "0.875rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "23px",
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: "0.5px",
    },

    body2: {
      fontSize: "18px",
      fontWeight: 400,
      lineHeight: 1.4,
      letterSpacing: "0.2px",
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 4,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiModal: {
      styleOverrides: {
        root: {
          zIndex: 50000,
        },
      },
    },
  },
};

const lightTheme = createTheme({
  ...commonThemeOptions,
  palette: {
    mode: "light",
    primary: {
      main: "rgb(40, 84, 76)",
      light: "rgb(123, 158, 143)",
      dark: "rgb(5, 10, 11)",
      contrastText: "rgb(199, 210, 218)",
    },
    secondary: {
      main: "rgb(65, 143, 75)",
      dark: "rgba(69, 114, 87, 0.67)",
    },
    error: {
      main: "rgba(148, 23, 16, 1)",
    },
    text: {
      primary: "rgba(4,6,6,0.87)",
      secondary: "rgb(113, 122, 124)",
    },
    info: {
      main: "rgb(8, 155, 152)",
    },
    background: {
      default: "rgb(233, 233, 233)",
      paper: "rgb(186, 186, 186)",
    },
    action: {
      hover: "rgba(58, 81, 64, 0.27)",
      selected: "rgba(31, 93, 124, 0.29)",
    
    },
  },

  typography: {
    fontWeightMedium: 600,
    h1: {
      fontFamily: "Droid Sans",
    },
    fontSize: 16,
    fontFamily: "Inter",
  },
});

const darkTheme = createTheme({
  ...commonThemeOptions,
  palette: {
    mode: "dark",
    primary: {
      main: "rgba(70, 95, 107, 0.98)",
      light: "rgba(126, 160, 170, 0.96)",
      dark: "rgba(104, 108, 116, 0.98)",
      contrastText: "rgba(215, 225, 222, 0.97)",
    },
    secondary: {
      main: "rgba(133, 186, 150, 0.95)",
      dark: " #33445566 "
    },
    error: {
      main: "rgba(212, 11, 42, 0.94)",
    },
    text: {
      primary: "rgba(255, 255, 255, 0.87)",
      secondary: "rgba(116, 143, 127, 0.93)",
    },
    info: {
      main: "rgba(33,220,243,0.87)",
    },
    background: {
      default: "rgb(15, 16, 16)",
      paper: "rgb(29, 35, 36)",
    },
    action: {
      hover: "rgba(47, 58, 64, 0.73)", // darker than the default 0.04
      selected: "rgba(80, 125, 159, 0.61)",
    },
    divider: "rgba(89, 89, 89, 0.76)",
  },
  typography: {
    fontWeightMedium: 600,
    h1: {
      fontFamily: "Droid Sans",
    },
    fontSize: 16,
    fontFamily: "Inter",
  },
});

export { lightTheme, darkTheme };
