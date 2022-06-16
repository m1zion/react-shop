import React from React;
import '../styles/Menu.scss';
/* CLASE 7 */
const Menu = () => {
    return(
        <div className="Menu">
        <ul>
          <li>
            <a href="/" className="title">My orders</a>
          </li>    
          <li>
            <a href="/">My account</a>
          </li>    
          <li>
            <a href="/">Sign out</a>
          </li>
        </ul>
      </div>
    );
}
export default Menu;