import React from "react";
import { Router, Redirect, Switch } from "react-router-dom";

import history from "../history";
import AppRoutes from "./pages";

export default function Routes() {
  return (
    <React.Fragment>
      <Router history={history}>
        <Switch>
          <AppRoutes />
          <Redirect to="/not-found" />
        </Switch>
      </Router>
    </React.Fragment>
  );
}
