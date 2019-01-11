import React, { Component } from 'react'
// import login from '../../actions/userfunction'

class Login extends Component {
    render() {
        return (
            <div>
                <div>Hello to login</div>
                <div><h1>{this.props.match.params.token}</h1></div>
            </div>
        )
    }
}

export default Login

