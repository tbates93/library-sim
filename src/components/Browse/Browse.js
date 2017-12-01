import React, { Component } from "react"
import "./Browse.css"
import { connect } from "react-redux"
import axios from "axios"

import { Link } from "react-router-dom"

import NavBar from "../NavBar/NavBar"
import { Button } from "../button/Button"

import Book from "../book/Book"

class Browse extends Component {
    constructor(props) {
        super(props)
        this.state = {
            books: []
        }
    }

    componentDidMount() {
        console.log(this.props)

        axios.get('/api/books/getall').then(response => {
            console.log(response.data)
            this.setState({
                books: response.data
            })
        })
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
                        <div className="booksContainer">
                            {this.state.books.length !== 0 ? this.state.books.map((book, index) => {
                                return (
                                    <Book 
                                        bookId={book.id}
                                        title={book.title}
                                        author={book.author}
                                        image={book.image}
                                        genre={book.genre}
                                        in_stock={book.in_stock}
                                        desc={book.description}
                                        remove={false}
                                    />
                                )
                            }) : null}
                        </div>
                        <div style={{ width: '300px', bottom: '0', right: '0' }}>
                            <Link to="/add"><Button title="+ Add New Book" /></Link>
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
    }
}
export default connect(mapStateToProps)(Browse);
