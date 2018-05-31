import React, { Component } from 'react';

export default class Book extends Component {
    
  render() {
    const { volumeInfo } = this.prop.book;

    return (
      <li>{volumeInfo.title}</li>
    );
  }
}