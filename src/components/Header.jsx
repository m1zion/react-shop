import React from 'react';
import '../styles/Header.scss';
const Header = () => {
    return(
        <nav>
        <img src="./icons/icon_menu.svg" alt="menu" className="menu"/>
    
        <div className="navbar-left">
          <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo"/>
    
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
              <img src="./icons/icon_shopping_cart.svg" alt="shopping cart"/>
              <div>2</div>
            </li>
          </ul>
        </div>
      </nav>
    );
}
export default Header;