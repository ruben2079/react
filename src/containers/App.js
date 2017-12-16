import React, { Component } from 'react';
import Login from './../components/Login';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <div className="App-intro">
          <Login />
        </div>
      </div>
    );
  }
}

export default App;
