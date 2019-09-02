import React, { Component } from 'react';
import Landing from '../Landing';

import './Header.css';

const Header = () => {
    return (
      <header className="vertical-center header-landing">
        <div>
          <h1><a href="/">Nabil Nassery</a></h1>
          <h2>Software Engineer</h2>
        </div>
      </header>
    )
}

export default Header;
