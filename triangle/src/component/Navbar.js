import React from 'react'
import {Link}from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <header className="navbar">
        <h1 className="Main_heading">Fun with Triangles</h1>
        <ul className="Navigator">
          <div className="links">
            <Link to='/Is Triangle'className='li'>Is Triangle?</Link>
            <Link to="/quiz"className='li'>Quiz</Link>
            <Link to="/hypotenuse"className='li'>Hypotenuse</Link>
            <Link to="/"className='li'>Area of Triangle</Link>
          </div>
        </ul>
      </header>
    </div>
  );
};

export default Navbar;
