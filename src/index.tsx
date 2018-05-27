import {createBrowserHistory} from "history";
import * as React from "react";
import * as ReactDom from "react-dom";
import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";
import {Router} from "react-router-dom";
import App from "./components/App";
import store from "./store";

const history = createBrowserHistory();

const appdiv = document.createElement("div");
appdiv.id = "app";
document.body.appendChild(appdiv);

const render = (Component) => {
  ReactDom.render(
    <AppContainer>
      <Provider store={store}>
        <Router history={history}>
        <Component />
        </Router>
      </Provider>
    </AppContainer>,
    appdiv,
  );
};

render(App);

if (module.hot) {
  module.hot.accept("./components/App", () => {
    render(App);
  });
}
