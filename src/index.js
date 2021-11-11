import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import App from "./App";
import { ThemeProvider } from "styled-components";
//utils
import "./styles/index.css";
import "./styles/fonts.css";
import "react-alice-carousel/lib/alice-carousel.css";
require("dotenv").config();

const theme = () => ({
  colors: {
    dark: "#02020f",
    light: "#F5F5F5",
    bck: "#fffff7",
    extra: "green",
    grey: "#727180",
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

