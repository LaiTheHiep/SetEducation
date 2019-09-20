// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import {reducer as toastrReducer} from 'react-redux-toastr'


export default function createRootReducer(history: History) {
  return function reducer(state = {}, action) {
    var stateRet = {
    };
    return stateRet;
  }
}
