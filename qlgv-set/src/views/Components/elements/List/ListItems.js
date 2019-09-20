import React from 'react';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';

class ListItems extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      numberItemActive: 1997
    }
  }
  render(){
    return(
      <Container>
        <ListGroup>
          {this.props.list.map((e, i) => 
          <ListGroupItem key={i} tag="button" action active={e._id===this.state.numberItemActive ? true : false}
            onClick={() => {this.state.numberItemActive = e._id; this.props.itemInfor(e._id)}}>
            {/* {e.name == undefined ? e.productId : (e.username == undefined ? e.name : e.username)} */}
            { e.productId != undefined ? e.productId : (e.username == undefined ? e.name : e.username) }
          </ListGroupItem>
          )}
        </ListGroup>
      </Container>
    );
  }
}

export default ListItems;