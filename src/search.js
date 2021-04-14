import React from 'react'
import { Link } from 'react-router-dom'
// import serializeForm from 'form-serialize'
import * as BooksAPI from './BooksAPI'
import Book from './book'

class Search extends React.Component {

    /*
NOTES: The search from BooksAPI is limited to a particular set of search terms.
You can find these search terms here:
https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
you don't find a specific author or title. Every search is limited by search terms.
*/

    state = {
        foundBooks: []
    };

    handleSubmit = (e) => {
        if (e.length > 0) {
            BooksAPI.search(e)
                .then((foundBooks) => {
                    if (foundBooks !== undefined) {
                        this.setState(() => ({
                            foundBooks
                        }))
                    }
                    else {
                        this.setState(() => ({
                            foundBooks: []
                        }))
                    }
                })
        } else {
            this.setState(() => ({
                foundBooks: []
            }))
        }
    }

    render() {
        const getShelf = (id) => {
            const b = this.props.currentBooks.find(x => x.id === `${id}`)
            let returnValue = "none"
            if (b !== undefined) {
                returnValue = b.shelf
            }
            return returnValue
        }

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/"></Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" name="search" placeholder="Search by title or author" onChange={(event) => this.handleSubmit(event.target.value)} />
                    </div>
                </div>
                <div className="search-books-results">

                    <ol className="books-grid">
                        {Array.isArray(this.state.foundBooks) && this.state.foundBooks.map((book) => (
                            <Book key={book.id} book={book} section={getShelf(`${book.id}`)} onUpdate={this.props.onUpdate}></Book>
                        ))}
                    </ol>
                </div>

            </div >
        )
    }
}

export default Search