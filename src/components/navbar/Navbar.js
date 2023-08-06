import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../logo_victis.png'

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

 
  return (
    <>
      <nav className='navbar_Home'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
        <img className= "victim_logo" src={logo} alt="logo victis formation"/>
        </Link>
        <div className='menu-icone' onClick={handleClick} >
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
       
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
            Accueil
            </Link>
          </li>
    
          <li className='nav-item'>
            <Link to='/Categories' className='nav-links' onClick={closeMobileMenu}>
            Formations
            </Link>
          </li>

          
          <li className='nav-item'>
            <Link
              to='/a_distance'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              à distance
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/actuialite'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Actualités
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/referance'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Références
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/contact'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li>
        
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
