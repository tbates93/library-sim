import React, { Component } from "react"
import "./Button.css"

export function Button(props) {

    return (
        <button className="button">
            {props.title}
        </button>
    )

}

export function Hi() {
    return (
        <div>
            <h1>hi</h1>
            <h1>hi</h1>
            <input type="text" disabled></input>
            <input type="text" ></input>


        </div>
    )
}
