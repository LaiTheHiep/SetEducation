import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Router } from 'react-router';

import App from '../containers/App';
import UnauthenticatedRoute from './Components/AuthenticationRoute/UnauthenticatedRoute'
import AuthenticatedRoute from './Components/AuthenticationRoute/AuthenticatedRoute'
// import Login from './Components/Pages/Login'
import Dashboard from './Components/Pages/Dashboard'

import DefaultLayout from '../containers/DefaultLayout';
import {globalVariableManager} from '../modules/GlobalVariableManager';
class Routers extends Component {
  render() {
    const { dispatch } = this.props
    const { accessToken, accessPermissions, roles } = this.props.user
    globalVariableManager.reduxManager.setDispatch(dispatch);
    return (
      <App>
        <Switch>
          <UnauthenticatedRoute
                exact
                path={'/login'}
                name="Login Page"
                component={DefaultLayout} //Login
                dispatch={dispatch}
                user={this.props.user}
                accessToken={accessToken}
                roles={roles}
              />
          <AuthenticatedRoute
                path={'/'}
                name="Home"
                component={DefaultLayout}
                dispatch={dispatch}
                user={this.props.user}
                accessToken={accessToken}
                accessPermissions={accessPermissions}
              />
        </Switch>
      </App>
    )
  }
}

function selectActions(state) {
  return {
    user:state.User,
    router:state.router
  }
}

export default connect(selectActions, undefined, undefined, {forwardRef: true})(Routers);
