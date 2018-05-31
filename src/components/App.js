import React, { Component } from 'react';

export default class App extends Component {
    
    render() {
      return (
        <div>
            <header>
                <Search/>
            </header>
            <main>
                <Books/>
            </main>
        </div>
      );
  }
}
