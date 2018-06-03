import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Books extends Component {

  static propTypes = {
    totalBooks: PropTypes.number,
  };

  handlePage(increment) {
    const { page, onPage } = this.props;
    onPage({ page: page + increment });
  }

  render() {
    const { totalBooks } = this.props;
    // const { totalBooks, page, perPage } = this.props;

    if(!totalBooks) return <div>No results found</div>;
    if(totalBooks) return <div>{totalBooks}</div>;

    // const totalPages = Math.ceil(totalBooks / perPage);
    // return (
    //   <div>
    //     <p>Page {page} of {totalPages}</p>
    //     <button onClick={() => this.handlePage(-1)} disabled={page === 1}>&lt; Prev</button>
    //     <button onClick={() => this.handlePage(+1)} disabled={page === totalPages}>Next &gt;</button>
    //   </div>
    // );
  }
}