import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Search extends Component {
  
  static propTypes = {
    searchTerm: PropTypes.string,
    onSearch: PropTypes.func.isRequired
  };

  state = {
    current: this.props.searchTerm || '',
  };

  componentWillReceiveProps({ searchTerm }) {
    if(searchTerm !== this.state.current) {
      this.setState({ current: searchTerm || '' });
    }
  }
  
  handleChange = ({ target }) => {
    this.setState({ current: target.value });
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