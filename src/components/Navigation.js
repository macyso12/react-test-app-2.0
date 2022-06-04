import React from 'react';
import {Link} from 'react-router-dom';

function Navigation() {
  return (
    <header className="header">
      <div className="siteName">Site Name</div>
      <nav>
        <ul>
          <li className="">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">Academics</Link>
          </li>
          <li>
            <Link to="experience">Money Matters</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
