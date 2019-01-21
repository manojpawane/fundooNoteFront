import React, { Component } from 'react'
import { forgetPass } from '../../Database/userfunction'

/**
 * Forget password defination
 */
class ForgetPassword extends Component {
    constructor() {
        super()
        this.state = {
            email: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()
        const email = {
            email: this.state.email,
        }

        forgetPass(email).then(res => {
            if (res) {
                alert('Reset password link had been send to your register mail id');
                this.props.history.push('/login');
            }

        })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div className="jumbotron text-center">
                <div className="container border border-dark rounded">
                    <div className="row">
                        <div className="col-md-6 mt-5 mx-auto">
                            <form noValidate onSubmit={this.onSubmit}>
                                <h1 className="h3 mb-3 front-weight-normal">Please enter your email to reset your password</h1>
                                <div className="form-group">
                                    <input type="email"
                                        className="form-control"
                                        id='email'
                                        name='email'
                                        placeholder="Enter Email"
                                        value={this.state.email}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ForgetPassword