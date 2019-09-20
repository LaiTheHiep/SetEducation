//LIB


//components

//variable

//

class ReduxManager{
  // constructor(){
  // }

  setDispatchAndState(dispatch,state){
    var self = this;
    self.dispatch=dispatch;
    self.state=state;
  }
  setDispatch(dispatch){
    var self = this;
    self.dispatch=dispatch;
  }
  setState(state){
    var self = this;
    self.state=state;
  }
}


export const reduxManager = new ReduxManager();
