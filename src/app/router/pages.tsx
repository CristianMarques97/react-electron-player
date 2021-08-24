import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ApplicationRoutes } from "../constants/enums/AplicationRoutes";
import BlankLayout from "../layoutManagers/Blank";
import UserLayout from "../layoutManagers/User";
import CompanyTokenView from "../views/company-token/CompanyToken";
import PlaylistDetailsView from "../views/PlaylistDetails/PlaylistDetails";
import PlaylistView from "../views/Playlists/Playlist";
import SchedulingView from "../views/Scheduling/Scheduling";
import Page from "./components/Page";

export default function AppRoutes() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/">
          <Redirect to={ApplicationRoutes.LOGIN} />
        </Route>
        <Page
          Component={CompanyTokenView}
          LayoutManager={BlankLayout}
          path={ApplicationRoutes.LOGIN}
        />
        <Page
          Component={SchedulingView}
          LayoutManager={UserLayout}
          path={ApplicationRoutes.SCHEDULING}
        />
        <Page
          Component={PlaylistView}
          LayoutManager={UserLayout}
          path={ApplicationRoutes.PLAYLIST}
        />
        <Page
          Component={PlaylistDetailsView}
          LayoutManager={UserLayout}
          path={ApplicationRoutes.PLAYLIST_ITEM}
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
