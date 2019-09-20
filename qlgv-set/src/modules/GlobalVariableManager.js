
// import { GoogleAnalyticsTracker } from "react-native-google-analytics-bridge";
// import Define from 'Define'

import {reduxManager} from './ReduxManager'

class GlobalVariableManager{
  constructor(){
    this.init = this.init.bind(this);
  }
  init(){
    this.reduxManager =reduxManager;
  }
}

export const globalVariableManager = new GlobalVariableManager();
