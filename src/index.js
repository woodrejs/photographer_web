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

//tmp
import Loader from "./components/Loader";

const theme = () => ({
  colors: {
    dark: "#0F1111",
    light: "#F5F5F5",
    bck: "#FFFFFF",
    extra: "green",
    grey: "grey",
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
