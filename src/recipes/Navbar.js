import React from 'react';
import {NavLink} from 'react-router-dom';

import './Navbar.css';

function Navbar() {
    return (
        <div className="Navbar">
            <NavLink activeClassName='Navbar-active' exact to='/recipes'>Recipes</NavLink>
            <NavLink activeClassName='Navbar-active' exact to='/ingredients'>Ingredients</NavLink>
            <NavLink activeClassName='Navbar-active' exact to='/tags'>Tags</NavLink>
            <NavLink activeClassName='Navbar-active' exact to='/logout'>Log out</NavLink>
        </div>
    );
}

export default Navbar;