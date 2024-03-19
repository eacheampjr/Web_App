import React from 'react';
import { Link } from 'react-router-dom';

// Renamed function to PascalCase for React component conventions
function Navigation() {
  return (
    <nav>
      {/* Updated links to match expected routes */}
      <Link to="/">Home</Link>
      <Link to="/topics">Topics</Link>
      <Link to="/timesheets">TimeSheet</Link>
      <Link to="/gallery">Gallery</Link>
      {/* Uncomment and update the paths as necessary when these pages are implemented */}
      {/* 
      <Link to="/contact">Contact</Link>
      <Link to="/order">Order</Link>
      <Link to="/staff">Staff</Link> */}
    </nav>
  );
}

export default Navigation;
