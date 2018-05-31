import React, { Component } from 'react';
import { search } from '../services/booksApi'
import Search from './Search';
import Books from './Books';

export default class App extends Component {
    
    state = {
      topic: '',
      page: 1,
      perPage: 20,
      totalItems: 0,
      items: []
    };

    searchBooks = () => {
      const { topic, page, perPage } = this.state;

      search({ topic }, { page, perPage })
        .then(({ items, totalItems }) => {
          this.setState({ items, totalItems });
          console.log(items);
        });
    };

    handleSearch = ({ search }) => {
        this.setState({ topic: search }, this.searchBooks);
      };

    render() {
      return (
        <div>
          <header>
            <p>Hello World</p>
            <Search onSearch={this.handleSearch}/>
          </header>
          <main>
            <Books/>
          </main>
        </div>
      );
    }
}
