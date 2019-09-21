import React from 'react';

class RegisterStudy extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { dispatch } = this.props;
    return (
      <div>
        <h1>Hello RegisterStudy</h1>
      </div>
    );
  }
}

export default RegisterStudy;