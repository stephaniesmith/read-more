import React, { Component } from 'react';
import { search } from '../services/booksApi'
import Search from './Search';
import Books from './Books';

export default class App extends Component {
    
    state = {
      topic: '',
      error: null,
      page: 1,
      perPage: 20,
      totalItems: 0,
      items: []
    };

    searchBooks = () => {
      const { topic, page, perPage } = this.state;

      search({ topic }, { page, perPage })
        .then(({ items, totalItems }) => {
          this.setState({ items, totalItems, error: null });
          console.log('ITEMS!!!', items);
        }, error => {
          this.setState({ error });
        });
    };

    handleSearch = ({ search }) => {
      this.setState({ topic: search }, this.searchBooks);
    };

    render() {
      const { topic, page, perPage, totalItems, items } = this.state;

      return (
        <div>
          <header>
            <p>Hello World</p>
            <Search onSearch={this.handleSearch}/>
          </header>
          <main>
            <Books items={items}/>
          </main>
        </div>
      );
    }
}
