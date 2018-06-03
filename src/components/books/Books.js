import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';


export default class Books extends Component {

  static propTypes = {
    books: PropTypes.array
  };

  render() {
    const { books } = this.props;

    return (
      <ul>
        {books.map(book => (
          <Book key={book.id} {...book}/>
        ))}
      </ul>
    );
  }
}