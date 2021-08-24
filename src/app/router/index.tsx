import React from "react";
import { HashRouter, MemoryRouter } from "react-router-dom";
import AppRoutes from "./pages";

export default function Routes() {
  return (
    <React.Fragment>
      <HashRouter>
        <AppRoutes />
      </HashRouter>
    </React.Fragment>
  );
}
