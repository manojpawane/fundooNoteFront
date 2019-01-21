import React, { Component } from 'react'
import {register} from '../../Database/userfunction'
import 'reactjs-toastr/lib/toast.css';

/**
 * Register class for user registration
 */
class Register extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            password: '',
            answer: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }

        register(user).then(res => {
         //   toastr.success(res, res, { displayDuration: 3000 })
            this.setState({ answer: res })
            this.props.history.push('/login');
        })
        .catch(err => {
            console.log(err);
        })

    }

    render() {
        return (
            <div className="jumbotron text-center">
                <div className="container border border-dark rounded">
                    <div className="row">
                        <div className="col-md-6 mt-5 mx-auto">
                            <form noValidate onSubmit={this.onSubmit}>
                                <h1 className="h3 mb-3 front-weight-normal">REGISTRATION</h1>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text"
                                        className="form-control"
                                        id='name' 
                                        name="name"
                                        placeholder="Enter Name"
                                        value={this.state.name}
                                        onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email"
                                        className="form-control"
                                        id='email'
                                        name="email"
                                        placeholder="Enter Email"
                                        value={this.state.email}
                                        onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password"
                                        className="form-control"
                                        id='password'
                                        name="password"
                                        placeholder="Enter Password"
                                        value={this.state.password}
                                        onChange={this.onChange} />
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Sign Up
                        </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register