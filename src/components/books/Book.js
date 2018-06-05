import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Book.css';

export default class Book extends Component {

  static propTypes = {
    id: PropTypes.string,
    volumeInfo: PropTypes.object
  };
    
  render() {
    const { id, volumeInfo } = this.props;
    const { title, imageLinks, authors } = volumeInfo;

    return (
      <li className={styles.book}>
        <Link to={`/books/${id}`}>
          <div>
            {title && <h3>{title}</h3>}
            {!title && <h3>Title Unavailable</h3>}
            {authors && <p>By {authors[0]}</p>}
            {!authors && <p>Author Unavailable</p>}
          </div>
          {imageLinks && imageLinks.smallThumbnail && <img src={imageLinks.smallThumbnail}/>}
          {!imageLinks && <img src="https://gangarams.com/image/cache/placeholder-250x250.png"/>}
        </Link>
      </li>
    );
  }
}