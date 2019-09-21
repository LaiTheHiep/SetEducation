import React from 'react';

class Groups extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { dispatch } = this.props;
    return (
      <div>
        <h1>Hello Groups</h1>
      </div>
    );
  }
}

export default Groups;