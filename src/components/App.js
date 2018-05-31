import React, { Component } from 'react';
import { search } from '../services/booksApi'
import Search from './Search';
import Books from './Books';

export default class App extends Component {
    
    state = {
      topic: '',
      loading: false,
      error: null,
      page: 1,
      perPage: 20,
      totalItems: 0,
      items: []
    };

    searchBooks = () => {
      const { topic, page, perPage } = this.state;

      this.setState({ loading: true });

      search({ topic }, { page, perPage })
        .then(({ items, totalItems }) => {
          this.setState({ items, totalItems, error: null });
        }, error => {
          this.setState({ error });
        })
        .then(() => this.setState({ loading: false }));

    };

    handleSearch = ({ search }) => {
      this.setState({ topic: search }, this.searchBooks);
    };

    render() {
      const { topic, loading, error, items } = this.state;

      return (
        <div>
          <header>
            <p>Find a Book</p>
            <Search onSearch={this.handleSearch}/>
          </header>
          <main>
            <section>
              {loading && <div>Loading...</div>}
              {error && <div>Error: {error.message}</div>}
              <p>{topic}</p>
            </section>
            <Books items={items}/>
          </main>
        </div>
      );
    }
}
