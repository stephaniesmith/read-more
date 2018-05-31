import React, { Component } from 'react';
import Search from './Search';
import Books from './Books';

export default class App extends Component {
    
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
