import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../logo.svg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="tera__navbar">
      <div className="tera__navbar-links">
        <div className="tera__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="tera__navbar-links_container">
          <p><a href="#home">ჩემთვის</a></p>
          <p><a href="#wtera">ბიზნესისთვის</a></p>
          <p><a href="#possibility">ინტერნეტბანკი</a></p>
          <p><a href="#features">სესხები</a></p>
          <p><a href="#blog">ბიბლიოთეკა</a></p>
        </div>
      </div>
      <div className="tera__navbar-sign">
        <p>რეგისტრაცია</p>
        <button type="button">ავტორიზაცია</button>
      </div>
      <div className="tera__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="tera__navbar-menu_container scale-up-center">
          <div className="tera__navbar-menu_container-links">
            <p><a href="#home">ჩემთვის</a></p>
            <p><a href="#wtera">ბიზნესისთვის</a></p>
            <p><a href="#possibility">ინტერნეტბანკი</a></p>
            <p><a href="#features">სესხები</a></p>
            <p><a href="#blog">ბიბლიოთეკა</a></p>
          </div>
          <div className="tera__navbar-menu_container-links-sign">
            <p>რეგისტრაცია</p>
            <button type="button">ავტორიზაცია</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
