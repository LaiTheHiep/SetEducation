import React from 'react';
import SubjectItem from '../elements/Inputs/ScheduleStudies/SubjectItem';

class ScheduleStudy extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: ["","","","","","","","","",""],
    };
  }

  render() {
    const { dispatch } = this.props;
    return (
      <div>
        <h1>Hello ScheduleStudy</h1>
        {
          this.state.list.map((e,i) => 
            <SubjectItem key={i} />
          )
        }
      </div>
    );
  }
}

export default ScheduleStudy;