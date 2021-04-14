import React from 'react'
import BookShelf from "./bookShelf";

class Shelves extends React.Component {
    render() {

        const books = this.props.Books;
        const showingBooks = books.filter((c) => (
            c.shelf.includes(this.props.Section.value)
        ))
        const Sections = [
            { text: "Currently Reading", value: "currentlyReading", index: 1 },
            { text: "Want To Read", value: "wantToRead", index: 2 },
            { text: "Read", value: "read", index: 3 }
        ]
        return (<div>
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    {Sections.map((section) => (
                        <BookShelf key={section.index} Section={section} Books={this.state.books} onUpdate={this.upDateBook} ></BookShelf>
                    ))}
                </div>
            </div>
            <div className="open-search">
                <button onClick={() => this.setState({ showSearchPage: !this.state.showSearchPage })}>Add a book</button>
            </div>
        </div>
        )
    }
}
export default Shelves