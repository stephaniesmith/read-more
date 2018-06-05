import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Search from '../search/Search';
import BookDetail from '../books/BookDetail';

export default class App extends Component {

  render() {

    return (
      <Router>
        <div>
          <Header/>
          <main>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/search" component={Search}/>
              <Route path="/books/:id" render={({ match, history }) => {
                return <BookDetail id={match.params.id} history={history}/>;
              }}/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}
