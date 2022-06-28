import React, { useState } from 'react';
import '@styles/ProductItem.scss';
import producto from '@images/estereo1_1.png';
import sale from '@images/sale_tag.png';
/* CLASE 6 */
const ProductItem = ({product}) => {
const [cart, setCart] = useState([]);
const handleClick = () =>{
  setCart(['Hey']);
}

return (
  <div className="ProductItem">
    <img src={producto} alt="{product.title}" />
    <img src={sale} className="ProductItem-sale" alt="sale"/>
    <p className='ProductItem-sale-text'>Oferta</p>
    <div className="product-info">
      <div>
        <p>{product.title}</p>
        <p>${product.price}</p>
      </div>
      {cart}
    </div>
  </div>
);
}
export default ProductItem;
/*Con el evento del handle*/
/*<div className="ProductItem">
    <img src={product.images[0]} alt="{product.title}" />
    <div className="product-info">
      <div>
        <p>${product.price}</p>
        <p>{product.title}</p>
      </div>
      <figure onClick={ handleClick }>
        <img src={add_to_cart} alt="" />
      </figure>
      {cart}
    </div>
  </div>*/