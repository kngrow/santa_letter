import React from 'react';
import { Col } from 'reactstrap';


export class FromComponent extends React.Component {
  textUpdate = (e) => {
    this.props.onUpdate(e.target.value);
  }

  render() {
    return (
      <Col className="text-right">
        おなまえ:<input name="form_name" onChange={this.textUpdate.bind(this)} defaultValue='たかし' />
      </Col>
    )
  }
}
