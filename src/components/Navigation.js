import React, {useState} from 'react';
//import {Link} from 'react-router-dom';
import './style.css';

//className="navLinks" style=
//</nav>{{transform: open ? 'translateX (0px)' : ''}}>

function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="header">
        <a className="siteName" href="/">
          My Portfolio Template
        </a>
        <nav>
          <ul
            className="navLinks"
            style={{transform: open ? 'translateX(0px)' : ''}}
          >
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="about">About</a>
            </li>
            <li>
              <a href="experience">Experience</a>
            </li>
            <li>
              <a href="project">Project</a>
            </li>
          </ul>
        </nav>
        <i onClick={() => setOpen(!open)} className="fa-solid fa-bars burger" />
      </div>
    </div>
  );
}

export default Navigation;
