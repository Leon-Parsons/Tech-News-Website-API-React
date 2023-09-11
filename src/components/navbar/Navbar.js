import React from 'react';
import './navbar.css';
import flogo from './flogo.png';
import hamlogo from './hamlogo.png';
import searchIcon from './searchIcon.png';

export default function Navbar() {
  return(
    <div id="navbar-body">
      <img id="hamburger-icon" src={hamlogo}></img>
      <div id="icon-title-div">
        <img id="nav-logo" src={flogo}></img>
        <h1 id="nav-title">Fresh-As Tech News</h1>
      </div>
      <div id="search-sec">
        <img id="search-icon" src={searchIcon}></img>
        <input id="search-bar" type="text" placeholder='techy stuff...'></input>
      </div>
    </div>
  )
}

