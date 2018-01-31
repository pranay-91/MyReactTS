import * as React from "react";
import * as ReactDom from "react-dom";
import { AppContainer } from "react-hot-loader";
import App from "./components/App";

const appdiv = document.createElement("div");
appdiv.id = "app";
document.body.appendChild(appdiv);

const render = Component => {
  ReactDom.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    appdiv
  );
};

render(App);

if (module.hot) {
  module.hot.accept("./components/App", () => {
    render(App);
  });
}
