import React, { Component } from "react"
import { Link } from "react-router-dom"

import logo from "../../assets/tan-logo.svg"

import "./NavBar.css"

export default class NavBar extends Component {
    render() {
        return (
            <header>
                <div className="links">
                    <img src={logo} className="logoT" />
                    <Link to='' className="link">Browse</Link>
                    <Link to='' className="link">Cart</Link>
                    <Link to='' className="link">My Shelf</Link>
                </div>
                <div>
                    <a className="logout" href={process.env.REACT_APP_LOGOUT}><button className="logout">Logout</button></a>
                </div>
            </header>
        )
    }
}