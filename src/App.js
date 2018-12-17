import React, { Component } from 'react';
import logo from './logo.svg';
import font from './zenzidou.ttf';
import './App.css';
import {InputComponent} from './InputComponent.js'
import { Container,Row,Col } from 'reactstrap';

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: ""
    }
  }
  updateText = (val) => {
        this.setState({
          text : val
        });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> hello</h1>
        </header>
        <Container>
          <Row>
            <Col className="form">
              <div>さんたさんへ</div>
                <InputComponent onUpdate={ this.updateText }/>
            </Col>
            <Col>
              <div className="letter_text">
                <p className="dear_santa">さんたさんへ</p>
                {this.state.text.split('\n').map(function(m,k){
                  return <p key={k}>{m}</p>;
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
