import React, { Component } from 'react';

export default class Book extends Component {
    
  render() {
    const { title, imageLinks, authors, description, } = this.props.book.volumeInfo;

    return (
      <li>
        <h3>Title: {title}</h3>
        <img src={imageLinks.smallThumbnail}/>
        <p>Author: {authors[0]}</p>
        <p>{description}</p>
      </li>
    );
  }
}