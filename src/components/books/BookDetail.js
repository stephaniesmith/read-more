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
      .then(book => this.setState({ book }));
  }
    
  render() {
    const { volumeInfo } = this.props.book;
    const { title, imageLinks, authors, description } = volumeInfo;

    return (
      <div>
        <p>Book Detail!!!</p>
        {title && <h3>Title: {title}</h3>}
        {imageLinks.smallThumbnail && <img src={imageLinks.smallThumbnail}/>}
        {authors && <p>Author: {authors[0]}</p>}
        {description && <p>{description}</p>}
      </div>
    );
  }
}