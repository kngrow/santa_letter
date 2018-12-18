import React, { Component } from 'react';
import './App.scss';
import {InputComponent} from './InputComponent.js'
import {FromComponent} from './FromComponent.js'
import { Container,Row,Col } from 'reactstrap';
import html2canvas from 'html2canvas';

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      name: "たかし",
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
      const text = this.state.text.split('\n').map((m,k) => <span key={k}>{m}</span>);

      html2canvas(document.querySelector('.letter_text')).then(canvas => {
      let letter_img = document.querySelector('.letter_img');
        if(letter_img.firstChild){
          letter_img.removeChild(letter_img.firstChild);
        }
        letter_img.appendChild(canvas);
      });
      return text;
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
            <Col xs="12" lg="6">
                <p className="letter_text">
                  <span className="dear_santa">さんたさんへ</span>
                  { this.convertText() }
                  <span className="from_name">{this.state.name} より</span>
                </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="letter_img"></div>
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
