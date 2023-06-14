import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div>
        <div className="container">
            <div className="heading">
                <h1> To do APP</h1>
            </div>
            <div className="list-items">
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/login">Log in</Link></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header