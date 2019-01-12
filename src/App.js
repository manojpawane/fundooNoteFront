import React, { Component } from 'react';
import Login from '../src/components/Login/Login'
import Register from '../src/components/Registration/Registration'
import VerifyToken from '../src/components/VerifyToken/VerifyToken'
import Dashboard from '../src/components/Dashboard/Dashboard'
import ForgetPassword from '../src/components/ForgetPassword/ForgetPassword'
import UpdateNewPassword from '../src/components/ForgetPassword/UpdateNewPassword'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/confirmation/:token" component={VerifyToken}/>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/forget/:token" component={ForgetPassword}/>
            <Route exact path="/updatePassword" component={UpdateNewPassword}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;