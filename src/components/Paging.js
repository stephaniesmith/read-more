import React, { Component } from 'react';

export default class Books extends Component {

  render() {
    const { totalItems, page, perPage } = this.props;

    const totalPages = Math.ceil(totalItems / perPage);
    return (
      <div>
        <p>Page {page} of {totalPages}</p>
      </div>
    );
  }
}