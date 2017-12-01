import React, { Component } from "react"
import "./Landing.css"
import { connect } from "react-redux"
import {Button} from "../button/Button"

import mlogo from "../../assets/maroon-logo.svg"

class Landing extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="outer">
                <div className="yellowContainer">
                    <img src={mlogo} className="logo" />
                    <span className="title">Book Exchange</span>
                    <div className="loginContainer">
                        <a href={process.env.REACT_APP_LOGIN}><Button title="Register  /  Login"></Button></a>
                    </div>
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Landing);



