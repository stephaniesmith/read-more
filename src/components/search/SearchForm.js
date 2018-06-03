import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Search extends Component {
  
  state = {
    searchTerm: PropTypes.string,
  };

  handleChange = ({ target }) => {
    this.setState({ search: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.callSearch();
  };

  callSearch() {
    const { current } = this.state;
    if(!current) return;
    this.props.onSearch(current);
  }
  
  render() {
    const { current } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input placeholder="Search" value={current} onChange={this.handleChange}/>
        <button>Search</button>
      </form>
    );
  }
}