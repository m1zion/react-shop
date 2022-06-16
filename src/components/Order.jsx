import React from React;
import '../styles/Order.scss';
/* CLASE 9 */
const Order = () => {
    return(
            <div className="order">
            <p>
                <span>03.25.21</span>
                <span>6 articles</span>
            </p>
            <p>$560.00</p>
            <img src="./icons/flechita.svg" alt="arrow" />
            </div>
    );
}
export default Order;

