import React, { Component } from "react"
import "./Add.css"

import axios from "axios"

import { Link } from "react-router-dom"

import NavBar from "../NavBar/NavBar"
import { Button } from "../button/Button"

class Add extends Component {
    constructor() {
        super()
        this.state = {
            image: '',
            title: '',
            author: '',
            genre: 1,
            description: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.submitBook = this.submitBook.bind(this)
    }

    handleChange(e, value){
        this.setState({
            [value]: e
        })
        console.log(this.state)
    }

    submitBook(){
        console.log('here')
        axios.post('/api/books/insert', this.state).then(response => {
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
                            <span className="addTitle">Add A Book</span>
                        </div>
                        <div className="bookContainer">
                            <div className="left">
                                <span className="descriptions">Image Url</span>
                                <input  onChange={e => this.handleChange(e.target.value, "image")}/>
                                <span className="descriptions">Image Preview</span>
                                <img src={this.state.image} className="image" />
                            </div>
                            <div className="right">
                                <div className="flexR">
                                    <span className="descriptions">Title</span>
                                    <input  onChange={e => this.handleChange(e.target.value, "title")}/>
                                </div>
                                <div className="flexR">
                                    <span className="descriptions">Author</span>
                                    <input  onChange={e => this.handleChange(e.target.value, "author")}/>
                                </div>
                                <div className="flexR">
                                    <span className="descriptions">Genre</span>
                                    <select onChange={e => this.handleChange(e.target.value, 'genre')}>
                                        <option value="1">Fantasty</option>
                                        <option value="2">Sci-fi</option>
                                        <option value="3">Non-fiction</option>
                                        <option value="4">Horror</option>
                                    </select>
                                </div>
                                <div className="flexR">
                                    <span className="descriptions">Description</span>
                                    <textarea onChange={e => this.handleChange(e.target.value, "description")} />
                                </div>
                                <a onClick={this.submitBook}><Button title="+ Add Book to Inventory" /></a>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Add