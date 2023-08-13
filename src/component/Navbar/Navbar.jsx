import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  
  return (
    <>
      <nav className='navbar-header'>
        <div className='logo-img' >
          <img src='src/component/img/Logo.png' alt='' />
        </div>
        <div>
          <ul>
            <li className='lis-nav'>
              <Link to="/" className='link-nav'>HOME</Link>
            </li>
            <li className='lis-nav'>
              <Link to="/findmentor" className='link-nav'>FIND MENTOR</Link>
            </li>
            <li className='lis-nav'>
              <Link to="/signupprovider" className='link-nav'>SIGN UP AS A PROVIDER</Link>
            </li>
            <li className='lis-nav'>
              <Link to="/aboutus" className='link-nav'>ABOUT US</Link>
            </li>
          </ul>
        </div>
        <div className='header'>
          <Link to="/signup"><button className="full-rounded">
            <span>SIGN IN</span>
            <div className="border full-rounded"></div></button>
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar