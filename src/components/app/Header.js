import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    
  render() {

    return (
      <div>
        <h1>Find a Book</h1>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/search" >Search</Link></li>
            </ul>
        </nav>
      </div>
    );
  }
}