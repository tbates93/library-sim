import React, { Component } from "react"
import "./Details.css"
import { connect } from "react-redux"
import axios from "axios"

import { Link } from "react-router-dom"

import NavBar from "../NavBar/NavBar"
import { Button } from "../button/Button"

import Book from "../book/Book"

class Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bookId: 1,
            title: 'Oathbringer',
            author: "Brandon Sanderson",
            image: 'https://images-na.ssl-images-amazon.com/images/I/91x4fchgt2L.jpg',
            genre: 1,
            in_stock: true,
            description: "Book 3 in The Stormlight Archives"
        }
    }

    componentDidMount() {
        console.log(this.props)

    }

    componentWillReceiveProps(newProps) {
        console.log(newProps)
    }


    render() {

        return (
            <div>
                <NavBar />
                <div className="detailsContainer">
                    <div className="inventoryContainer">
                        <div className="titleOptions">
                            <span className="detailsTitle">Details</span>
                            <Link to="/browse">Back</Link>

                        </div>
                        <div className="detailsBook">
                            <img className="dbookImage" src={this.props.book.image} />
                            <div className="dtitleAuth">
                                <span className="dtitle">{this.props.book.title}</span>
                                <span className="dauthor">by {this.props.book.author}</span>
                            </div>
                            <div className="dsideInfo">
                                <div><span>In Stock: </span><span>{this.props.book.in_stock ? "Yes" : "No"}</span></div>
                                {this.props.book.remove ? <Button title="-Remove From Cart" /> : null}

                                <Link to="/edit"><a onClick={() => this.props.book.setBook(this.props.book)}><Button title="Edit" /></a></Link>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        book: state.book
    }
}
export default connect(mapStateToProps)(Details);
