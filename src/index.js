import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./App.css";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import { Provider } from "react-redux";
import store from "./Redux/store";

const theme = createTheme({
  mode: "dark",
  palette: {
    primary: {
      light: "#FFFFFF",
      main: "#BE2938",
      dark: "#EF4F5E",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    secondary: {
      light: "#FFFFFF",
      main: "#5B83E4",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#FFFFFF",
    },
    // Provide every color token (light, main, dark, and contrastText) when using
    // custom colors for props in Material UI's components.
    // Then you will be able to use it like this: `<Button color="custom">`
    // (For TypeScript, you need to add module augmentation for the `custom` value)
    // custom: {
    //   light: "#ffa726",
    //   main: "#f57c00",
    //   dark: "#ef6c00",
    //   contrastText: "rgba(0, 0, 0, 0.87)",
    // },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  modes: {
    dark: {
      text: "#FFFFFF",
      background: "#000000",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
