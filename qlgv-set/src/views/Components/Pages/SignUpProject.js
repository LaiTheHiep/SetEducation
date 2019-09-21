import React from 'react';

class SignUpProject extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { dispatch } = this.props;
    return (
      <div>
        <h1>Hello SignUpProject</h1>
      </div>
    );
  }
}

export default SignUpProject;