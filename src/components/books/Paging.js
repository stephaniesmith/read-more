import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Books extends Component {

  static propTypes = {
    totalBooks: PropTypes.number,
    page: PropTypes.number,
    perPage: PropTypes.number,
    onPaging: PropTypes.func.isRequired
  };

  state = {
    current: this.props.page || 1,
  };

  componentWillReceiveProps({ page }) {
    if(page !== this.state.current) {
      this.setState({ current: page || 1 });
    }
  }

  handlePage(increment) {
    event.preventDefault();
    const { page } = this.props;
    this.setState({ current: page + increment }, () => {
      this.callPage();
    });
  }

  callPage() {
    const { current } = this.state;
    if(!current) return;
    this.props.onPaging(current);
  }

  render() {
    const { totalBooks, page, perPage } = this.props;

    if(!totalBooks) return <div>No results found</div>;

    const totalPages = Math.ceil(totalBooks / perPage);
    return (
      <div>
        <p>Page {page} of {totalPages}</p>
        <button onClick={() => this.handlePage(-1)} disabled={page === 1}>&lt; Prev</button>
        <button onClick={() => this.handlePage(+1)} disabled={page === totalPages}>Next &gt;</button>
      </div>
    );
  }
}