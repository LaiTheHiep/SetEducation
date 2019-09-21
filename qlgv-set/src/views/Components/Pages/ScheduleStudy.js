import React from 'react';

class ScheduleStudy extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { dispatch } = this.props;
    return (
      <div>
        <h1>Hello ScheduleStudy</h1>
      </div>
    );
  }
}

export default ScheduleStudy;