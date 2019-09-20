// @flow
import React, { Component, ReactFragment } from 'react';
import { Provider } from 'react-redux';
import { withCookies } from 'react-cookie';
import { withRouter } from 'react-router-dom';

import { ConnectedRouter } from 'connected-react-router'
import type { Store } from '../reducers/types';
import Routes from '../views/Routes';
import { PersistGate } from 'redux-persist/lib/integration/react';
import ReduxToastr from 'react-redux-toastr';
import { connect } from 'react-redux';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

type Props = {
  store: Store,
  history: {}
};

export default class Root extends Component<Props> {
  render() {
    const { store, persistor, history } = this.props;
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <React.Fragment>
            <ConnectedRouter history={history}>
              <Routes /> 
            </ConnectedRouter>
            <ReduxToastr
              timeOut={3000}
              newestOnTop={false}
              preventDuplicates
              position="bottom-right"
              transitionIn="fadeIn"
              transitionOut="fadeOut"
              progressBar
              closeOnToastrClick
            />
          </React.Fragment>
        </PersistGate>
      </Provider>
    );
  }
}

// function selectActions(state) {
//   return {
//     user:state.User,
//     router:state.router
//   }
// }
// export default withRouter(connect(selectActions, undefined, undefined, {forwardRef: true}))(Root);