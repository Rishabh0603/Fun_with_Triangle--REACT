import React from 'react'
import {Link}from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <header className="navbar">
        <h1 className="Main_heading">Fun with Triangles</h1>
        <ul className="Navigator">
          <div className="links">
            <li>
            <Link to='/Is Triangle'className="whiteName" >Is Triangle?</Link>
            </li>

             <li>
            <Link to="/quiz"className="whiteName" >Quiz</Link>
            </li>

            <li>
            <Link to="/hypotenuse" className="whiteName" >Hypotenuse</Link>
            </li>

            <li>
            <Link to="/" className="whiteName" >Area of Triangle</Link>
            </li>

          </div>
        </ul>
      </header>
    </div>
  );
};

export default Navbar;
