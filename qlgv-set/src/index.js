import 'react-app-polyfill/ie9'; // For IE 9-11 support
import 'react-app-polyfill/stable';
// import 'react-app-polyfill/ie11'; // For IE 11 support
import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';
import App from './App';

import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom'
import Root from './containers/Root';
import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux'
/*-----------------------------------------------------------------------------*/
import { configureStore, history } from './store/configureStore';
import {globalVariableManager} from './modules/GlobalVariableManager';

globalVariableManager.init();
const {store,persistor} = configureStore({});
ReactDOM.render(
  // <AppContainer basename="/">
  //   <Root store={store} persistor={persistor} history={history} />
  // </AppContainer>,
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
