
import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import '@styles/ProductItemSm.scss';
import producto2 from '@images/estereo1_2.png';
import sale from '@images/sale_tag.png';

const ProductItemSm = ({product}) => {
const {addToCart} = useContext(AppContext); //Llamamos el estado
//Este lo obtenemos el onclik
const handleClick = item =>{
  addToCart(item);
  console.log("item")
}

return (
  <div className="ProductItemSm">
    <img  className="ProductItemImageSm"  src={producto2} alt="{product.title}" />
    <img src={sale} className="ProductItem-sale" alt="sale"/>
    <p className='ProductItem-sale-text'>Oferta</p>
    <div className="product-info-sm">
      <div>
        <p>{product.title}</p>
        <p>${product.price}</p>
        <p>${product.price}</p>
      </div>
    </div>
  </div>
);
}
export default ProductItemSm;
