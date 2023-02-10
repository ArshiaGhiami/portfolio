import { createTheme } from "@mui/material/styles";
import { blue, blueGrey, grey, red } from "@mui/material/colors";

//NOTE Create Custom Theme
export const darkTheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "dark",
    primary: {
      main: "#8be9fd",
    },
    secondary: {
      main: blueGrey[500],
    },
    title: {
      main: grey[500]
    },
    success: {
      light: "#4caf50",
      main: "#2e7d32",
      dark: "#1b5e20"
    }
  },
  typography: {
    fontFamily: "Tanha ,vazir, roboto",
  },
});

export const lightTheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "light",
    primary: {
      main: "#8be9fd",
    },
    secondary: {
      main: blueGrey[800],
    },
    title: {
      main: blueGrey[700]
    },
    success: {
      light: "#4caf50",
      main: "#2e7d32",
      dark: "#1b5e20"
    }
  },
  typography: {
    fontFamily: "Tanha ,vazir, roboto",
  },
});

