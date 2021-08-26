import { Fragment } from 'react'
import { HashRouter } from 'react-router-dom'
import AppRoutes from './pages'

export default function Routes() {
  return (
    <Fragment>
      <HashRouter>
        <AppRoutes />
      </HashRouter>
    </Fragment>
  )
}
