import React, { Component } from 'react';
import './App.css';
import Node from './Node';

class App extends Component {
  state = {
    data: "Loading demo from https://zccz14.com/assets/computer-networking.json"
  }
  componentDidMount() {
    fetch('https://zccz14.com/assets/computer-networking.json').then(v => v.json()).then(v => this.setState({data: v}));
  }
  render() {
    return (
      <div>
        <h1>The Tree</h1>
        <p>prototyped by zccz14</p>
        <Node data={this.state.data} />
      </div>
    );
  }
}

export default App;
