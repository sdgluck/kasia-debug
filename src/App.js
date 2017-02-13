import React, { Component } from 'react';
import { connectWpQuery } from 'kasia/connect';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

class App extends Component {
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

export default connect(({ wordpress }) => wordpress)(connectWpQuery(
  (wpapi, props) => wpapi.pages().slug(props.slug).embed().get(),
  (thisProps, newProps) => thisProps.slug !== newProps.slug
)(App));
