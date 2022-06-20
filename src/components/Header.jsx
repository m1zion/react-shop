import React from 'react';
import '../styles/Header.scss';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo24_7.png';
import shopping_cart from '@icons/icon_shopping_cart_white.svg';
const Header = () => {
    return(
        <nav className='navbar'>
        <img src={menu} alt="menu" className="menu"/>
    
        <div className="navbar-left">
          <img src={logo} alt="logo" className="logo"/>
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
            <li className="navbar-email">platzi@example.com</li>
            <li className="navbar-shopping-cart">
              <img src={shopping_cart} alt="shopping cart" className='shopping_cart_icon'/>
              <div>2</div>
            </li>
          </ul>
        </div>
      </nav>
    );
}
export default Header;