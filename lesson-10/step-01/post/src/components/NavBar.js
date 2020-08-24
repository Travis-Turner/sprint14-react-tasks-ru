import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import './styles/NavBar.css';

function NavBar(props) {
  const history = useHistory();
  function signOut(){
    props.handleLogout();
    localStorage.removeItem('jwt');
    history.push('/login');
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