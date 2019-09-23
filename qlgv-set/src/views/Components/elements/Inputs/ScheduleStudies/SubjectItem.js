import React from 'react';

class SubjectItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { dispatch } = this.props;
    return (
      <div>
        <h1>Hello SubjectItem</h1>
      </div>
    );
  }
}

export default SubjectItem;