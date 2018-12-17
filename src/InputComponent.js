import React from 'react';


export class InputComponent extends React.Component {
  constructor(props){
    super(props);
  }
  textUpdate = (e) => {
    this.props.onUpdate(e.target.value);
  }

  render() {
    return (
        <textarea name="input_text" row="8" col="40" onChange={this.textUpdate.bind(this)}></textarea>
    )
  }
}
