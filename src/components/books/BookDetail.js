import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class BookDetail extends Component {

  // static propTypes = {
  //   id: PropTypes.string,
  //   volumeInfo: PropTypes.object
  // };
    
  render() {
    // const { id, volumeInfo } = this.props;
    // const { title, imageLinks, authors, description } = volumeInfo;

    return (
      <div>
        <p>Book Detail!!!</p>
        {/* {title && <h3>Title: {title}</h3>}
        {imageLinks.smallThumbnail && <img src={imageLinks.smallThumbnail}/>}
        {authors && <p>Author: {authors[0]}</p>}
        {description && <p>{description}</p>} */}
      </div>
    );
  }
}