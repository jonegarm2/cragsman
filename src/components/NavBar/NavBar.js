import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
    <div>
      <Link to='/' className='NavBar-link'>HOME</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/brands' className='NavBar-link'>BRANDS</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/reviews' className='NavBar-link'>REVIEWS</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/search' className='NavBar-link'>SEARCH</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='' className='NavBar-link' onClick={props.handleLogout} >LOG OUT</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span className='NavBar-home'> {props.user.name}</span>
  </div>
    :
  <div>
      <Link to='/' className='NavBar-link'>HOME</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/brands' className='NavBar-link'>BRANDS</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/reviews' className='NavBar-link'>REVIEWS</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/search' className='NavBar-link'>SEARCH</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/login' className='NavBar-link'>LOG IN</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
  </div>;
};

export default NavBar;