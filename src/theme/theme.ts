import { createTheme } from "@mui/material/styles";

const rootElement = document.getElementById("root");
// A custom theme for this app
const theme = createTheme({
  components: {
    MuiPopover: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiPopper: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "rgb(0, 0, 0)",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "rgb(49, 130, 206)",
      light: "rgb(102, 177, 255)",
      dark: "rgb(45, 55, 72)",
    },
    secondary: {
      main: "rgb(239, 248, 250)",
    },
    text: {
      primary: "rgb(0, 0, 0)",
      secondary: "rgb(255, 255, 255)",
    },
    error: {
      main: "rgb(221, 55, 85)",
    },
  },
});

export default theme;
