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
        <h1>Hello Dashboard</h1>
      </div>
    );
  }
}

export default Dashboard;