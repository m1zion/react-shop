import React, { useState, useContext } from 'react';
import '../styles/Header.scss';
import menu from '@icons/icon_menu_white.svg';
import logo from '@logos/logo24_7.png';
import shopping_cart from '@icons/icon_shopping_cart_white.svg';
import account from '@icons/Login_white.svg';
import logout from '@icons/logout.svg';
import Menu from '@components/Menu';
import AppContext from '@context/AppContext';
import MyOrder from '@containers/MyOrder';
const Header = () => {
    const [toggle,setToggle] = useState(false);
    const [toggleOrders, setToggleOrders] = useState(false);
    const { state } = useContext(AppContext);
    const handleToggle = () => {
      setToggle(!toggle);
    }
    return(
        <nav className='navbar sticky'>
          <div className='navbar-top'>
            <img src={menu} alt="menu" className="menu"/>
            <div className="navbar-left">
              <img src={logo} alt="logo" className="nav-logo"/>
            </div>
            <div className="form-group fg--search">
              <input type="text" id="search" placeholder="Buscar productos" className="input-search push"/>
              <button type="submit"><i className="fa fa-search"></i></button>
            </div>
            <div className="navbar-right">
              <ul>
                <li className="navbar-email" onClick= {handleToggle}>email@example.com</li>
                <li><img src={account} alt='account_icon' className='account_icon'></img></li>
                <li 
                  className="navbar-shopping-cart" 
                  onClick={
                    () => setToggleOrders(!toggleOrders)
                  }>
                  <i className="fa fa-cart-shopping"></i>
                  <img src={shopping_cart} alt="shopping cart" className='shopping_cart_icon'/>
                  {state.cart.length> 0 ? <div>{state.cart.length}</div> : null }
                </li>
                <li><img src={logout} alt='logout' className="logout_icon"></img></li>
              </ul>
            </div>
            {toggle ? <Menu/> : ""}
            {toggleOrders ? <MyOrder/> : ""}
          </div>
          <div className="navbar-left">
            <ul>
                <li><a href="/">Car Audio</a></li>
                <li><a href="/">Autoestereos</a></li>
                <li><a href="/">Woofers</a></li>
                <li><a href="/">Subwoofers</a></li>
                <li><a href="/">Amplificadores</a></li>
                <li><a href="/">Twitters</a></li>
                <li><a href="/">Iluminacion</a></li>
                <li><a href="/">Marino</a></li>            
                <li><a href="/">Contacto</a></li>
            </ul>
          </div>
      </nav>
    );
}
export default Header;