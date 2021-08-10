import React from "react";
import {
  Router,
  Redirect,
  Switch,
  Route,
  HashRouter,
  MemoryRouter,
} from "react-router-dom";
import BlankLayout from "../../layoutManagers/Blank";
import NotFoundView from "../../views/notFound/NotFound";

import history from "../history";
import AppRoutes from "./pages";

export default function Routes() {
  return (
    <React.Fragment>
      <MemoryRouter>
        <AppRoutes />
      </MemoryRouter>
    </React.Fragment>
  );
}
