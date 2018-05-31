import React, { Component } from 'react';

export default class Book extends Component {
    
  render() {
    const { volumeInfo } = this.props.book;

    return (
      <li>{volumeInfo.title}</li>
    );
  }
}