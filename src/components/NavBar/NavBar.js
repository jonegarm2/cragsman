import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
    <div className="NavBar">
      <span className='NavBar-home'> Welcome, {props.user.name}</span>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='' className='NavBar-link' onClick={props.handleLogout} >LOG OUT</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='/' className='NavBar-link'>HOME</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <div>CRAGSMAN</div>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/brands' className='NavBar-link'>BRANDS</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/activites' className='NavBar-link'>ACTIVITIES</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
          <input className="Button" type="search" placeholder="Search" aria-label="Search"/>
          <button className="Button" type="submit">Search</button> 
      &nbsp;&nbsp;|&nbsp;&nbsp;
      {/* Modal for Cart */}
    </div>
    :
    <div className="NavBar">
      <Link to='/login' className='NavBar-link'>LOG IN</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/' className='NavBar-link'>HOME</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/brands' className='NavBar-link'>BRANDS</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/activities' className='NavBar-link'>ACTIVITIES</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="button" type="submit">Search</button>   
    </div>;

    

  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};



export default NavBar;