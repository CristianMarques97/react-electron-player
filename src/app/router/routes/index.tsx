import React from "react";
import { MemoryRouter } from "react-router-dom";
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
