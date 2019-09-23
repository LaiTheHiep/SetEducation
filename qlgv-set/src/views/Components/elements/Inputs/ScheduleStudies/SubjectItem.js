import React from 'react';
import { Container, Table } from 'reactstrap';

class SubjectItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const { dispatch } = this.props;
    return (
      <div>
        <h1>
          <tr>
            <td><i className="icon-plus"></i></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </h1>
      </div>
    );
  }
}

export default SubjectItem;