import React from 'react';

class GraduationLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { dispatch } = this.props;
    return (
      <div>
        <h1>Hello GraduationLayout</h1>
      </div>
    );
  }
}

export default GraduationLayout;