import React, { Component } from 'react';

export default class Book extends Component {
    
  render() {
    const { title, imageLinks, authors, description, } = this.props.book.volumeInfo;

    return (
      <li>
        {title && <h3>Title: {title}</h3>}
        {imageLinks.smallThumbnail && <img src={imageLinks.smallThumbnail}/>}
        {authors && <p>Author: {authors[0]}</p>}
        {description && <p>{description}</p>}
      </li>
    );
  }
}