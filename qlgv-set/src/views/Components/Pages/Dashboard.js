import React from 'react';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { dispatch } = this.props;
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
}

function selectActions(state) {
  return {
    list: state.Device
  }
}

export default Dashboard;