import React, { Component } from 'react';
import Login from '../src/components/Login/Login'
import Register from '../src/components/Registration/Registration'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Route exact path="/" component={Register} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/confirmation/:token" component={Login}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;