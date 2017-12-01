import React, { Component } from "react"
import "./Button.css"

export function Button(props) {
 
        return (
            <button className="button">
                {props.title}
            </button>
        )
    
}

