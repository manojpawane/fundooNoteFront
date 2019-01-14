import React, { Component } from 'react';
import Login from '../src/components/Login/Login'
import Register from '../src/components/Registration/Registration'
import VerifyToken from '../src/components/VerifyToken/VerifyToken'
import Dashboard from '../src/components/Dashboard/Dashboard'
import ForgetPassword from '../src/components/ForgetPassword/ForgetPassword'
import UpdateNewPassword from '../src/components/ForgetPassword/UpdateNewPassword'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

class App extends Component {
  render() {

    function PrivateRoute({ component: Component, ...rest }) {
      return (
        <Route
          {...rest}
          render={props =>
            localStorage.usertoken ? (
              <Component {...props} />
            ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: props.location }
                }}
              />
            )
          }
        />
      );
    }

    return (
      <Router>
        <div className="App">
          <div>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/confirmation/:token" component={VerifyToken}/>
            <Route exact path="/forget" component={ForgetPassword}/>
            <Route exact path="/updatePassword/:token" component={UpdateNewPassword}/>
            <PrivateRoute path="/dashboard" component={Dashboard} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;