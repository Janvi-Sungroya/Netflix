import React from 'react'
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { useState } from "react";
import "./navbar.scss";
import { Link } from 'react-router-dom';

export default function Navbar() {

    const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };


  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
    <div className="container">
      <div className="left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
          alt=""
        />
       <span className='navbarmainLinks'>   <a href="/" className='anchor'>Homepage</a>    </span>  
       <span  className='navbarmainLinks'>   <a href="/movies" className='anchor'>Movies</a>    </span> 
       <span className='navbarmainLinks'>   <a href="/series" className='anchor'>Series</a>    </span> 
        <span>   <a href="/login" className='anchor'>Login</a>    </span>  
        <span>   <a href="/register" className='anchor'>Register</a>    </span>  
      </div>
      <div className="right">
        <Search className="icon" />
        <span>KID</span>
        <Notifications className="icon" />
        <img
          src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <div className="profile">
          <ArrowDropDown className="icon" />
          <div className="options">
            <span className='navbarmainLinks'>
            <a href='/settings' className='anchor'>Settings</a></span>
            <span>   <a href="/login" className='anchor'>Logout</a>    </span> 
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
