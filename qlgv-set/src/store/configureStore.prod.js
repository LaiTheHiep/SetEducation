// @flow
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createHashHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from '../reducers';
import type, { counterStateType } from '../reducers/types';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'primary',
  // storage:createElectronStorage(),
  storage,
  whitelist:['User','Device','Automatic','ThemeOptions'],
  // transforms:[
  //   createFilter('User',['loginState','accessToken','userSetting','loginInfo','userInfo']),
  //   createFilter('Device',['devicesTypes','devicesProperties','localDevices','relations','childDevices'])
  // ]
 }

const history = createHashHistory();
const rootReducer = createRootReducer(history);
const persistedReducer = persistReducer(persistConfig, rootReducer);
// const persistedReducer = rootReducer;

const router = routerMiddleware(history);
const enhancer = applyMiddleware(thunk,router ) ;

function configureStore(initialState?: counterStateType) {
  var store = createStore(persistedReducer, initialState, enhancer);
  var persistor = persistStore(store);
  return {store,persistor};
}

export default { configureStore, history };
