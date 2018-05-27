import React from "react";
import {Route, Switch} from "react-router-dom";
import About from "../views/About";
import Dashboard from "../views/Dashboard";

import "../styles/app.scss";

const App: React.StatelessComponent = () => {
  return <Switch>
  <Route path="/" exact={true} component={Dashboard}/>;
  <Route path="/about" component={About}/>
  </Switch>;
};

export default App;
