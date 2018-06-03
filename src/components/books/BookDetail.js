import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getBook } from '../../services/booksApi';
 
export default class BookDetail extends Component {

  static propTypes = {
    id: PropTypes.string.isRequired,
    history: PropTypes.object
  };

  state = {
    book: null
  };

  componentDidMount() {
    getBook(this.props.id)
      .then(book => {
        this.setState({ book });
      });
  }
    
  render() {
    const { book } = this.state;

    if(book === null) return null;

    return (
      <div>
        <p>Book Detail!!!</p>
        {book.volumeInfo.title && <h3>Title: {book.volumeInfo.title}</h3>}
        {book.volumeInfo.imageLinks.smallThumbnail && <img src={book.volumeInfo.imageLinks.smallThumbnail}/>}
        {book.volumeInfo.authors && <p>Author: {book.volumeInfo.authors[0]}</p>}
        {book.volumeInfo.description && <p>{book.volumeInfo.description}</p>}
      </div>
    );
  }
}