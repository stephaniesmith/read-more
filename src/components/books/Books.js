import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import Paging from './Paging';

export default class Books extends Component {

  static propTypes = {
    books: PropTypes.array,
    totalBooks: PropTypes.number
  };

  render() {
    const { books, totalBooks } = this.props;

    return (
      <div>
        <Paging key={totalBooks} {...totalBooks}/>
        <ul>
          {books.map(book => (
            <Book key={book.id} {...book}/>
          ))}
        </ul>
      </div>
    );
  }
}