import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './booklogo.png';

export default class Header extends Component {
    
  render() {

    return (
      <div>
        <nav>
          <ul>
            <li><Link to="/"><img src={logo} width="100"/></Link></li>
            <li><Link to="/search" >Search</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}