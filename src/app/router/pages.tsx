import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import ApplicationRoutes from '../constants/enums/AplicationRoutes'
import BlankLayout from '../layoutManagers/Blank'
import UserLayout from '../layoutManagers/User'
import LoginView from '../views/Login/LoginView'
import PlaylistDetailsView from '../views/PlaylistDetails/PlaylistDetails'
import PlaylistView from '../views/Playlists/Playlist'
import SchedulingView from '../views/Scheduling/Scheduling'
import Page from './components/Page'

export default function AppRoutes() {
  const login: number = useSelector((state: any) => state.stores?.id)

  return (
    <Fragment>
      <Switch>
        <Route exact path="/">
          {!login ? (
            <Redirect to={ApplicationRoutes.LOGIN} />
          ) : (
            <Redirect to={ApplicationRoutes.SCHEDULING} />
          )}
        </Route>
        <Page
          Component={LoginView}
          LayoutManager={BlankLayout}
          path={ApplicationRoutes.LOGIN}
        />
        <Page
          needAuthentication
          Component={SchedulingView}
          LayoutManager={UserLayout}
          path={ApplicationRoutes.SCHEDULING}
        />
        <Page
          needAuthentication
          Component={PlaylistView}
          LayoutManager={UserLayout}
          path={ApplicationRoutes.PLAYLIST}
        />
        <Page
          needAuthentication
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
      </Switch>
    </Fragment>
  )
}
