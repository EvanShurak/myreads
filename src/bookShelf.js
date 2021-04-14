import React from 'react'
import Book from "./book";

class BookShelf extends React.Component {
    render() {

        const books = this.props.Books;
        const showingBooks = books.filter((c) => (
            c.shelf.includes(this.props.Section.value)
        ))

        return (
            < div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.Section.text}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid" >
                        {showingBooks.map((book) => (
                            <Book key={book.id} book={book} section={this.props.Section.value} onUpdate={this.props.onUpdate}></Book>
                        ))}
                    </ol>
                </div>
            </div >
        )
    }
}
export default BookShelf