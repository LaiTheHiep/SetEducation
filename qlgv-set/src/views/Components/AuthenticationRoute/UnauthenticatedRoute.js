import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

function queryString(name, url = window.location.href) {
  name = name.replace(/[[]]/g, '\\$&')

  const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)', 'i')
  const results = regex.exec(url)

  if (!results) {
    return null
  }
  if (!results[2]) {
    return ''
  }

  return decodeURIComponent(results[2].replace(/\+/g, ' '))
}

export default class UnauthenticatedRoute extends React.Component{
  render(){
    const {path,component,dispatch,user,accessToken,exact,roles,...rest}=this.props
    const C = component
    const redirect = queryString('redirect')
    return (
      <Route
        path={path}
        exact={exact}
        render={props =>{
          return (
            !accessToken ? (
              <C {...props} {...rest} />
            ) : (
              <Redirect to={redirect || '/'} />
            )
          )
        }}
      />
    )
  }
}

UnauthenticatedRoute.propTypes = {
  accessToken: PropTypes.string.isRequired
}