import React, { useState } from 'react';
import '../styles/ProductItem.scss';
/* CLASE 6 */
import add_to_cart from '@icons/bt_add_to_cart.svg';
const ProductItem = ({product }) => {
const [cart, setCart] = useState([]);   //Estado, funcion modificadora
const handleClick = () =>{  //por convencion
  setCart([]);
}
return (
  <div className="ProductItem">
    <img src={product.images[0]} alt="{product.title}" />
    <div className="product-info">
      <div>
        <p>${product.price}</p>
        <p>{product.title}</p>
      </div>
      <figure onClick={ handleClick }>
        <img src={add_to_cart} alt="" />
      </figure>
      {}
    </div>
  </div>
);
}
export default ProductItem;