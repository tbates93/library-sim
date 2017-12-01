import React, { Component } from "react"
import "./Edit.css"
import {connect} from "react-redux"

import axios from "axios"

import { Link } from "react-router-dom"

import NavBar from "../NavBar/NavBar"
import { Button } from "../button/Button"

class Edit extends Component {
    constructor() {
        super()
        this.state = {
            image: 'Test',
            title: '',
            author: 'Test',
            genre: 1,
            description: '',
            book_id: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.editBook = this.editBook.bind(this)
        this.deleteBook = this.deleteBook.bind(this)
    }

    componentDidMount(){
        console.log(this.props)
        this.setState({
            image: this.props.book.image,
            title: this.props.book.title,
            author: this.props.book.author,
            genre: this.props.book.genre,
            description: this.props.book.desc,
            book_id: this.props.book.book_id
        })
    }

    handleChange(e, value){
        this.setState({
            [value]: e
        })
        console.log(this.state)
    }

    editBook(){
        console.log('here')
        axios.put('/api/books/update/'+this.props.book.bookId, this.state).then(response => {
            window.location = "/browse"
        })
    }

    deleteBook(){
        console.log("delete")
        axios.delete('/api/books/delete/'+this.props.book.bookId).then(response => {
            window.location = "/browse"
        })
    }

    render() {
        return (
            <div>
                <NavBar />
                <div className="addContainer">
                    <div className="inventoryContainer">
                        <div className="titleOptions">
                            <span className="addTitle">Edit</span>
                            <Link to="/details">Back</Link>
                        </div>
                        <div className="bookContainer">
                            <div className="left">
                                <span className="descriptions">Image Url</span>
                                <input value={this.state.image} onChange={e => this.handleChange(e.target.value, "image")}/>
                                <span className="descriptions">Image Preview</span>
                                <img src={this.state.image} className="image" />
                            </div>
                            <div className="right">
                                <div className="flexR">
                                    <span className="descriptions">Title</span>
                                    <input value={this.state.title} onChange={e => this.handleChange(e.target.value, "title")}/>
                                </div>
                                <div className="flexR">
                                    <span className="descriptions">Author</span>
                                    <input value={this.state.author} onChange={e => this.handleChange(e.target.value, "author")}/>
                                </div>
                                <div className="flexR">
                                    <span className="descriptions">Genre</span>
                                    <select value={this.state.genre} onChange={e => this.handleChange(e.target.value, 'genre')}>
                                        <option value="1">Fantasty</option>
                                        <option value="2">Sci-fi</option>
                                        <option value="3">Non-fiction</option>
                                        <option value="4">Horror</option>
                                    </select>
                                </div>
                                <div className="flexR">
                                    <span className="descriptions">Description</span>
                                    <textarea value={this.state.description} onChange={e => this.handleChange(e.target.value, "description")} />
                                </div>
                                <a onClick={this.editBook}><Button title="Save Book" /></a>
                                <a onClick={this.deleteBook}><Button title="Delete Book" /></a>
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
export default connect(mapStateToProps)(Edit);
