import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

export default class Book extends Component {

  static propTypes = {
    id: PropTypes.string,
    volumeInfo: PropTypes.object
  };
    
  render() {
    const { id, volumeInfo } = this.props;
    const { title, imageLinks, authors, description } = volumeInfo;
    // const { title, imageLinks, authors, description, } = this.props.book.volumeInfo;

    return (
      <li>
        {title && <h3>Title: {title}</h3>}
        {imageLinks.smallThumbnail && <img src={imageLinks.smallThumbnail}/>}
        {authors && <p>Author: {authors[0]}</p>}
        {description && <p>{description}</p>}
        {id && <p>{id}</p>}
      </li>
    );
  }
}