import React, { Component } from 'react';
import { search } from '../../services/booksApi'
import Header from './Header';
import Search from '../Search';
import Books from '../Books';
import Paging from '../Paging';

export default class App extends Component {
    
    state = {
      topic: '',
      loading: false,
      error: null,
      page: 1,
      perPage: 10,
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
      this.setState({ topic: search, page: 1 }, this.searchBooks);
    };

    handlePage = ({ page }) => {
      this.setState({ page }, this.searchBooks);
    };

    render() {
      const { topic, loading, error, page, perPage, totalItems, items } = this.state;

      return (
        <div>
          <header>
            <h1>Find a Book</h1>
            <Header/>
            <Search onSearch={this.handleSearch}/>
          </header>
          <main>
            <section>
              {loading && <div>Loading...</div>}
              {error && <div>Error: {error.message}</div>}
              <p>Results for: {topic}</p>
            </section>
            <Paging
              totalItems={totalItems}
              page={page}
              perPage={perPage}
              onPage={this.handlePage}
            />
            <Books items={items}/>
          </main>
        </div>
      );
    }
}
