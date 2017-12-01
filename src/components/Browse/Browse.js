import React, { Component } from "react"
import "./Browse.css"

import NavBar from "../NavBar/NavBar"

class Browse extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <NavBar />
                <div className="browseContainer">
                    <div className="inventoryContainer">
                        <div className="titleOptions">
                            <span className="browseTitle">Browse Inventory</span>
                            <div className="filter">
                                <span>In Stock</span>
                                <span>Out of Stock</span>
                            </div>
                            <div className="genre"></div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Browse