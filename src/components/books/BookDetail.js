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
        console.log('BOOKDIDMOUNT!!!', book);
      });
  }
    
  render() {
    const { book } = this.props;
    console.log('BOOK!!!', book);
    // const { volumeInfo } = book;
    // const { title, imageLinks, authors, description } = volumeInfo;

    return (
      <div>
        <p>Book Detail!!!</p>
        {/* {book.id && <h3>Title: {book.id}</h3>} */}
        {/* {imageLinks.smallThumbnail && <img src={imageLinks.smallThumbnail}/>}
        {authors && <p>Author: {authors[0]}</p>}
        {description && <p>{description}</p>} */}
      </div>
    );
  }
}