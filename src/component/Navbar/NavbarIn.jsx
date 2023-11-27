import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


function NavbarItem() {
    const [open, setOpen] = useState(false);

    return (
        <li className='profile-item'>
            <a href='#' className='icon-btn' onClick={() => setOpen(!open)} >
                <img src='src/component/img/userpf.png' alt='' />
            </a>
            {open && <DropdownMenu />} {/* ให้เรียกใช้ DropdownMenu หาก open เป็น true */}
        </li>
    );
}


function DropdownMenu({ onLogout }) {

    const handleLogout = () => {
        localStorage.removeItem('token');
        onLogout();
        window.location.reload();
      };

    function DropdownItem({ children, onClick }) {
        return (
            <div href='#' className='menu-item' onClick={onClick}>
                {children}
            </div>
        );
    }

    return (
        <>
            <div className="dropdown">
                <DropdownItem><Link to="/profile" className='menu-pro'>My Profile</Link></DropdownItem>
                {/* <DropdownItem>Setting</DropdownItem> */}
                <DropdownItem onClick={handleLogout} >Logout</DropdownItem>
            </div>

        </>
    );
}


function NavbarIn({ onLogout }) {


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
                    <NavbarItem icon='userpf.png'>
                        <DropdownMenu onLogout={onLogout}/>
                    </NavbarItem>
                    {/* <button onClick={onLogout} className="full-rounded">
                        <span>LOGOUT</span>
                        <div className="border full-rounded"></div>
                    </button> */}
                    <ul className='profile-nav'>
                    </ul>

                </div>
            </nav>
        </>
    )
}

export default NavbarIn

