import React from "react";
import { HashRouter, Redirect, Route, Router, Switch } from "react-router-dom";
import BlankLayout from "../../layoutManagers/Blank";
import UserLayout from "../../layoutManagers/User";
import CompanyTokenView from "../../views/company-token/CompanyToken";
import MainPage from "../../views/mainPage/MainPage";
import NotFoundView from "../../views/notFound/NotFound";
import history from "../history";
import Page from "./components/Page";

export default function AppRoutes() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Page
          Component={CompanyTokenView}
          LayoutManager={BlankLayout}
          path="/login"
        />
        <Page
          Component={MainPage}
          LayoutManager={UserLayout}
          path="/main-page"
        />
        {/* <Page
          exact
          Component={NotFoundView}
          LayoutManager={BlankLayout}
          path="/not-found"
        /> */}
        {/* <Redirect to="/not-found" /> */}
      </Switch>
    </React.Fragment>
  );
}
