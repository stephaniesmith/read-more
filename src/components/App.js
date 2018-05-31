import React, { Component } from 'react';
import { search } from '../services/booksApi'
import Search from './Search';
import Books from './Books';

export default class App extends Component {
    
    state = {
      volume: '',
      page: 1,
      perPage: 20,
      totalItems: 0,
      items: []
    };

    searchBooks = () => {
      const { volume, page, perPage } = this.state;

      search({ volume }, { page, perPage })
        .then(({ items, totalItems }) => {
            this.setState({ items, totalItems });
        });
    };

    render() {
      return (
        <div>
          <header>
            <p>Hello World</p>
            <Search/>
          </header>
          <main>
            <Books/>
          </main>
        </div>
      );
    }
}
