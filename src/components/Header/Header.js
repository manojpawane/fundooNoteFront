import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

/// Navbar is component which displays and manipulate the navigation bar
class Header extends Component {
    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push('/');
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbar1"
                    aria-controls="navbar1"
                    aria-expanded="false"
                    aria-label="Toggle-navigation">
                    <span className="navbar-toggler-icon"></span>
                    ></button>

                <div className="collapse navbar-collapse justify-content-md-center" id="navbar1">
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item dropdown">
                            <button className="nav-link dropdown-toggle" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Profile
                            </button>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <button className="dropdown-item" onClick={this.logOut.bind(this)}>Logout</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default withRouter(Header)