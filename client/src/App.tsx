import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Main from "./pages/Main";

const App = () => {
  return (
    <Switch>
      <Redirect exact path="/" to="login" />
      <Route path="/login" />
      <Route path="/signup" />
      <Route path="/main" component={Main} />
    </Switch>
  );
};

export default App;
