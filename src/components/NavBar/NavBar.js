import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
    <div className="NavBar">
      <span className='NavBar-home'> Welcome, {props.user.name}</span>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='' className='NavBar-link' onClick={props.handleLogout} >LOG OUT</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <div>CRAGSMAN</div>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/cart' className='NavBar-link'>CART</Link>
    </div>
    :
    <div className="NavBar">
      <Link to='/login' className='NavBar-link'>LOG IN</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <div>CRAGSMAN</div>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      {/* <button onClick={() => this.setState({ showModal: true})}>      */}
    </div>;

    

  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};

export default NavBar;
