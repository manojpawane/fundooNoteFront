import React, { Component } from 'react';
import Login from '../src/components/Login/Login'
import Register from '../src/components/Registration/Registration'
//const BrowserRouter = require('react-router-dom').BrowserRouter
import { BrowserRouter as Router, Route } from 'react-router-dom'
// const Route = require('react-router-dom').Route

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <div className="container">
            <Route exact path="/" component={Register} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />

          </div>
        </div>
      </Router>
    );
  }
}

export default App;