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
        {title && <Link to={`/books/${id}`}><h3>Title: {title}</h3></Link>}
        {imageLinks.smallThumbnail && <img src={imageLinks.smallThumbnail}/>}
        {authors && <p>Author: {authors[0]}</p>}
      </li>
    );
  }
}