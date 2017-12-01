import React, { Component } from "react"
import "./Book.css"
import { Button } from "../button/Button"
import {connect} from "react-redux"

import {setBook} from "../../ducks/reducer"

import {Link} from "react-router-dom"

class Book extends Component {

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

    componentDidMount(){
        console.log(this.props)
    }

    render() {
        return (
            <div className="containerBook">
                <img className="bookImage" src={this.props.image} />
                <div className="titleAuth">
                    <span className="title">{this.props.title}</span>
                    <span className="author">by {this.props.author}</span>
                </div>
                <div className="sideInfo">
                    <div><span>In Stock: </span><span>{this.props.in_stock ? "Yes" : "No"}</span></div>
                    {this.props.remove ? <Button title="-Remove From Cart" /> : null}

                    <Link to="/details"><a onClick={() => this.props.setBook(this.props)}><Button title="Details" /></a></Link>
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
export default connect(mapStateToProps, {setBook})(Book);
