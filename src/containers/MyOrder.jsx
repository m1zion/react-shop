import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from '../context/AppContext';
import '@styles/MyOrder.scss';
import arrow from '@icons/flechita.svg';

const MyOrder = () => {
const { state } = useContext(AppContext);
const sumTotal = () =>{  //se puede convertir en un hook si se quiere usar mas veces
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = state.cart.reduce(reducer,0);
    return sum;
}
return (
    <aside className="MyOrder">
        <div className="title-container">
            <img src={arrow} alt="arrow" />
            <p className="title">My order</p>
        </div>
        <div className="my-order-content">
            {state.cart.map(product => (
                <OrderItem product={product} key={`orderItem-${product.id}`} />
                //Le concatenamos la palabra OrderItem porque si no causaria conflicto con otros keys, como en orderList
            ))}
            <div className="order">
                <p>
                    <span>Total</span>
                </p>
                <p>${sumTotal()}</p>
            </div>
            <button className="primary-button">
                Checkout
            </button>
        </div>
    </aside>
);
}

export default MyOrder;