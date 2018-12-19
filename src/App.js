import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Registration from '../src/components/Registration/Registration'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello Fundoo Notes welcome you</h1>
        <Registration/>
      </div>
    );
  }
}

export default App;
