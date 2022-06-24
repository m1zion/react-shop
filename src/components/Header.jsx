import React, { useState } from 'react';
import '../styles/Header.scss';
import menu from '@icons/icon_menu_white.svg';
import logo from '@logos/logo24_7.png';
import shopping_cart from '@icons/icon_shopping_cart_white.svg';
import account from '@icons/Login_white.svg';
import logout from '@icons/logout.svg';
import Menu from '@components/Menu';
const Header = () => {
    const [toggle,setToggle] = useState(false);
    const handleToggle = () => {
      setToggle(!toggle);
    }
    return(
        <nav className='navbar'>
        <img src={menu} alt="menu" className="menu"/>
    
        <div className="navbar-left">
          <img src={logo} alt="logo" className="nav-logo"/>
          <ul>
            <li>
              <a href="/">CAR AUDIO</a>
            </li>
            <li>
              <a href="/">AUTOESTEREOS</a>
            </li>
            <li>
              <a href="/">WOOFERS</a>
            </li>
            <li>
              <a href="/">SUBWOOFERS</a>
            </li>
            <li>
              <a href="/">AMPLIFICADORES</a>
            </li>
            <li>
              <a href="/">TWITTERS</a>
            </li>
          </ul>
        </div>
    
        <div className="navbar-right">
          <ul>
            <li className="navbar-email" onClick= {handleToggle}>platzi@example.com</li>
            <li><img src={account} alt='account_icon' className='account_icon'></img></li>
            <li className="navbar-shopping-cart">
              <img src={shopping_cart} alt="shopping cart" className='shopping_cart_icon'/>
              <div>2</div>
            </li>
            <li><img src={logout} alt='logout' className="logout_icon"></img></li>
          </ul>
        </div>
        {toggle ? <Menu/> : ""}
      </nav>
    );
}
export default Header;