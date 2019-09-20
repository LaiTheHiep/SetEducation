import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export default function AuthenticatedRoute({
  path,
  component,
  dispatch,
  user,
  accessToken,
  layout,
  exact,
  cookies,
  ...rest
}){
  const C = component
  const Layout = layout
  return (
    <Route
      path={path}
      exact={exact}
      render={props =>{
        return (
          (accessToken) ? (
            Layout ? (
              <Layout {...props} accessToken={accessToken} {...rest}>
                <C {...props} accessToken={accessToken} {...rest} />
              </Layout>
            ) : (
              <C {...props} accessToken={accessToken} {...rest} />
            )
          ) : (
            <Redirect
              to={`${"/login"}?redirect=${props.location.pathname}${
                props.location.search
              }`}
            />
          )
        )
      }}
    />
  )
}

AuthenticatedRoute.propTypes = {
  accessToken: PropTypes.string.isRequired
}