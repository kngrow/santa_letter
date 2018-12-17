import React, { Component } from 'react';
import logo from './logo.svg';
import font from './zenzidou.ttf';
import './App.css';
import {InputComponent} from './InputComponent.js'
import {FromComponent} from './FromComponent.js'
import { Container,Row,Col } from 'reactstrap';

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      name: "たかし"
    }
  }
  updateText = (val) => {
        this.setState({
          text : val
        });
  }
  updateName = (val) => {
    this.setState({
      name:val
    });
  }

  convertText = () => {
    if(this.state.text !== ""){
      return this.state.text.split('\n').map((m,k) => <span key={k}>{m}</span>);
    } else {
      return "";
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>さんたさんにてがみを書くやつ</h1>
        </header>
        <Container>
          <Row>
            <Col className="how_to_use">
              <p>さんたさんに<ruby>手<rt>て</rt>紙<rt>がみ</rt></ruby>をかいてみよう！</p>
            </Col>
          </Row>
          <Row>
            <Col className="form" xs="12" lg="6">
              <div className="text-left">さんたさんへ</div>
                <InputComponent onUpdate={ this.updateText }/>
                <FromComponent onUpdate={ this.updateName }/>
            </Col>
            <Col className="letter_text" xs="12" lg="6">
                <p>
                <span className="dear_santa">さんたさんへ</span>
                { this.convertText() }
                <span className="from_name">{this.state.name} より</span>
              </p>
            </Col>
          </Row>
        <Row className="text-white">
          <Col>
            <p>
              てがみの文字の生成には<a href="https://tanukifont.com/zenjido/" target="_blank">全児童ふぉんと</a> の無料版を使わせていただきました<br />
            </p>
          </Col>
        </Row>
        </Container>
      </div>
    );
  }
}

export default App;
