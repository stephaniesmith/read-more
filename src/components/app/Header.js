import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './booklogo.png';
import search from './search.png';
import styles from './Header.css';

export default class Header extends Component {
    
  render() {

    return (
      <header className={styles.header}>
        <nav>
          <ul>
            <li><Link to="/"><img src={logo} width="100"/></Link></li>
            <li><Link to="/search" ><img id="search-icon" src={search}/><span>Search</span></Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}