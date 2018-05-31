import React, { Component } from 'react';
import Book from './Book';


export default class Books extends Component {
  render() {
    return (
      <ul>
        <Book/>
      </ul>
    );
  }
}