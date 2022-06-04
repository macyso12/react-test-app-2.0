import Navigation from '../Navigation';
import React from 'react';

function Layout() {
  return (
    <div display="flex" className="content-container">
      <div>
        <Navigation />
      </div>
    </div>
  );
}

export default Layout;
