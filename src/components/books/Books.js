import React, { Component } from 'react';
import Book from './Book';


export default class Books extends Component {

  render() {
    const { items } = this.props;

    return (
      <ul>
        {items.map((book, i) => (
          <Book key={i} book={book}/>
        ))}
      </ul>
    );
  }
}