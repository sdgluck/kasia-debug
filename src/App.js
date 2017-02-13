import React, { Component } from 'react';
import { connectWpQuery } from 'kasia/connect';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
  }

  render() {
    console.log('props', this.props);

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default connectWpQuery(
  (wpapi) => wpapi.pages().slug('sobre').embed().get(),
  (thisProps, newProps) => console.log('shouldUpdate', thisProps, newProps) || true
)(App);
