import React, { Component } from 'react'
import { updatePassword } from '../../Database/userfunction'

class UpdateNewPassword extends Component {
    constructor() {
        super()
        this.state = {
            newPassword: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit(e){
        e.preventDefault()
        const password = {
            password: this.state.newPassword,
            token:this.props.match.params.token
        }

        updatePassword(password).then(res => {
            if (res) {
                alert('New Password Updated, Please login through new Password');
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
                                <h1 className="h3 mb-3 front-weight-normal">Please enter New Password</h1>
                                <div className="form-group">
                                    <input type="password"
                                        className="form-control"
                                        id='newPassword'
                                        name='newPassword'
                                        placeholder="Enter New Password"
                                        value={this.state.newPassword}
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

export default UpdateNewPassword