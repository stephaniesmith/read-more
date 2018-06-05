import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Book extends Component {

  static propTypes = {
    id: PropTypes.string,
    volumeInfo: PropTypes.object
  };
    
  render() {
    const { id, volumeInfo } = this.props;
    const { title, imageLinks, authors } = volumeInfo;

    return (
      <li>
        <Link to={`/books/${id}`}>
          {title && <h3>Title: {title}</h3>}
          {!title && <h3>Title: Unavailable</h3>}
          {imageLinks && imageLinks.smallThumbnail && <img src={imageLinks.smallThumbnail}/>}
          {!imageLinks && <img src="https://gangarams.com/image/cache/placeholder-250x250.png"/>}
          {authors && <p>Author: {authors[0]}</p>}
          {!authors && <p>Author: Unavailable</p>}
        </Link>
      </li>
    );
  }
}