import React, { Component } from 'react'
import {Verify} from '../../actions/userfunction'

class VerifyToken extends Component {
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
        const verifyEmail = {
            email: this.state.email,
            token: this.props.match.params.token
        }

        Verify(verifyEmail).then(res => {
            console.log(res);
            this.props.history.push('/login');
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
                                <h1 className="h3 mb-3 front-weight-normal">Please enter your email for verification</h1>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email"
                                        className="form-control"
                                        id='email'
                                        name='email'
                                        placeholder="Enter Email"
                                        value={this.state.email}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">Verify</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default VerifyToken