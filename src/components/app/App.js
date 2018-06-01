import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { search } from '../../services/booksApi';
import Header from './Header';
import Home from './Home';
import Search from '../search/Search';
// import Books from '../Books';
// import Paging from '../Paging';

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
        <Router>
          <div>
            <Header/>
              {/* <Search onSearch={this.handleSearch}/> */}
            <main>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/search" component={Search}/>
              </Switch>
              {/* <section>
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
              <Books items={items}/> */}
            </main>
          </div>
        </Router>
      );
    }
}
