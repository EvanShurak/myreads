import { Component } from "react";

class Book extends Component {
    selectChanged = (newSection) => {
        const upDatedBook = this.props.book;
        upDatedBook.shelf = newSection
        this.props.onUpdate(upDatedBook)
        // console.log(this.props.book.id);
    }

    render() {
        const book = this.props.book;

        return (

            < li key={book.id} >
                {/* {console.log(book.imageLinks.smallThumbnail)} */}
                < div className="book" >
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${book.imageLinks && book.imageLinks.smallThumbnail})` }}></div>
                        <div className="book-shelf-changer">
                            <select value={this.props.section} onChange={event => this.selectChanged(event.target.value)} >
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read" >Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                </div >

            </li >
        )
    }

}

export default Book
