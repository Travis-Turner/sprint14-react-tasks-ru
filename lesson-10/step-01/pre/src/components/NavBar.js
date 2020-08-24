import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/NavBar.css';

function NavBar(props) {
  function signOut(){
    // finish the function
  }
  return (
    <nav className="menu">
      <NavLink exact className="menu__item" activeClassName="menu__item_active" to="/diary">Diary</NavLink>
      <NavLink className="menu__item" activeClassName="menu__item_active" to="/tips">Советы</NavLink>
      <button onClick={signOut} className="menu__item menu__button">Sign out</button>
    </nav>
  );
}

export default NavBar;