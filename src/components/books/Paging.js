import React, { Component } from 'react';

export default class Books extends Component {

  handlePage(increment) {
    const { page, onPage } = this.props;
    onPage({ page: page + increment });
  }

  render() {
    const { totalItems, page, perPage } = this.props;

    if(!totalItems) return <div>No results found</div>;

    const totalPages = Math.ceil(totalItems / perPage);
    return (
      <div>
        <p>Page {page} of {totalPages}</p>
        <button onClick={() => this.handlePage(-1)} disabled={page === 1}>&lt; Prev</button>
        <button onClick={() => this.handlePage(+1)} disabled={page === totalPages}>Next &gt;</button>
      </div>
    );
  }
}