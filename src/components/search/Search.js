import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchForm from './SearchForm';
import Books from '../books/Books';
import { search } from '../../services/booksApi';
import queryString from 'query-string';
import Paging from '../books/Paging';

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
    totalBooks: null
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
      .then(({ items, totalItems }) => {
        this.setState({ books: items, totalBooks: totalItems });
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
    const { searchTerm, books, error, totalBooks } = this.state;

    return (
      <div>
        <SearchForm searchTerm={searchTerm} onSearch={this.handleSearch}/>
        {error && <div>{error}</div>}
        {(!error && totalBooks) && <Paging totalBooks={totalBooks}/>}
        {(!error && books) && <Books books={books}/>}
      </div>
    );
  }
}