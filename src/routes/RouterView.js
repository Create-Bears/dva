import React, { Component } from 'react'
import { Switch, Router, Route, Redirect } from 'dva/router'
class RouterView extends Component {
  render() {
    let { history, routes } = this.props

    let redirect = routes.filter(item => item.redirect)
    let RedirectArr = redirect.map((item, index) => {
      return (
        <Redirect key={index} from={item.path} to={item.redirect}></Redirect>
      )
    })
    routes = routes.filter(item => !item.redirect)
    return (
      <Router history={history}>
        <Switch>
          {routes.map((item, index) => {
            return (
              <Route
                key={index}
                path={item.path}
                render={props => {
                  return (
                    <item.component
                      children={item.children}
                      {...props}
                      history={history}></item.component>
                  )
                }}></Route>
            )
          })}
          {RedirectArr.length !== 0 && RedirectArr}
        </Switch>
      </Router>
    )
  }
}

export default RouterView
