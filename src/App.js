
import React from 'react'
import * as BooksAPI from './BooksAPI'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './App.css'

import Search from "./search"
import BookShelf from './bookShelf';
import Shelves from './Shelves';
//import Book from "./book";

class App extends React.Component {
    state = {
        showSearchPage: false,
        books: []
    };


    componentDidMount() {
        BooksAPI.getAll()
            .then((books) => {
                this.setState(() => ({
                    books
                }))
            })
    };

    upDateBook = (book) => {
        console.log(book.id, book.shelf)
        BooksAPI.update(book, book.shelf)
            .then((book) => {
                this.setState((prevState) => ({
                    books: prevState.books, book
                }))
            })
    };

    render() {
        const Sections = [
            { text: "Currently Reading", value: "currentlyReading", index: 1 },
            { text: "Want To Read", value: "wantToRead", index: 2 },
            { text: "Read", value: "read", index: 3 }
        ]
        return (
            <div>
                <Route exact path="/" render={() => (
                    <div className="list-books">

                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>
                        <div className="list-books-content">
                            {Sections.map((section) => (
                                <BookShelf key={section.index} Section={section} Books={this.state.books} onUpdate={this.upDateBook} ></BookShelf>
                            ))}
                        </div>
                        <Link to="/search"
                            className="open-search"
                        ><button ></button></Link>
                    </div>
                )} />

                <Route exact path="/search" render={() => (
                    <Search currentBooks={this.state.books} onUpdate={this.upDateBook}></Search>
                )}
                />

            </div >
        )
    }
}
export default App