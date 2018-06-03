import React, { Component } from 'react';
import SearchForm from './SearchForm';
import Books from '../books/Books';
import { search } from '../../services/booksApi';
import PropTypes from 'prop-types';
import queryString from 'query-string';

const getSearch = location => location ? location.search : '';

export default class Search extends Component {

  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  };
  
  state = {
    searchTerm: '',
    error: null,
    books: null,
    // page: 1,
    // perPage: 10,
    // totalItems: null
  };

  componentDidMount() {
    this.searchFormQuery(this.props.location.search);
  }

  componentWillReceiveProps({ location }) {
    const next = getSearch(location);
    const current = getSearch(this.props.location);
    if(current === next) return;
    this.searchFormQuery(next);
  }

  searchFormQuery(query) {
    const { search: searchTerm } = queryString.parse(query);
    this.setState({ searchTerm });
    if(!searchTerm) return;

    search(searchTerm)
      .then(({ Search }) => {
        this.setState({ books: Search });
      })
      .catch(error => {
        this.setState({ error });
      });
  }

  handleSearch = searchTerm => {
    this.setState({ error: null });

    this.props.history.push({
      search: searchTerm ? queryString.stringify({ search: searchTerm }) : ''
    });
  };

  // searchBooks = () => {
  //   const { searchTerm, page, perPage } = this.state;

  //   this.setState({ loading: true });

  //   search({ searchTerm }, { page, perPage })
  //     .then(({ items, totalItems }) => {
  //       this.setState({ items, totalItems, error: null });
  //     }, error => {
  //       this.setState({ error });
  //     })
  //     .then(() => this.setState({ loading: false }));

  // }
  
  render() {
    const { searchTerm, books, error } = this.state;

    return (
      <div>
        <SearchForm searchTerm={searchTerm} onSearch={this.handleSearch}/>
        {error && <div>{error}</div>}
        {(!error && books) && <Books items={books}/>}
        <ul>
          <Books/>
        </ul>
      </div>
    );
  }
}