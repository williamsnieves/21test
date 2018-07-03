import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import routes from './routes'
export default class MainRouter extends React.Component {
  render () {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            {routes.map((route, key) => <Route {...route} key={key} />)}
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
