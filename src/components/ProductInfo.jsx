import React from 'react';
import cart from '@icons/bt_add_to_cart.svg';
import '@styles/ProductInfo.scss';
/* CLASE 12 */
const ProductInfo = () => {
    return(
       <div className="ProductInfo">
          <p> Auto Estereo Sony G347</p>
          <img className = "mainImage" src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
          <div className="productInfo-price-containeter">
            <div className="priceInfo">
              <p>Oferta valida: 10:25:30</p>
              <p>Precio Normal</p>
              <p>Precio descuento</p>
              <p>Numero de Productos</p>
              <p>SKU: KL029KKSLL966</p>
            </div>
            <div className="productActions">
              <div className="productActionsButtons">
                <button className="primary-button">Comprar</button>
                <button className="primary-button">Agregar al carrito</button>
              </div>
              <p>20 Disponibles</p>
            </div>
          </div>
          <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
          <button className="primary-button add-to-cart-button">
            <img src={ cart } alt="add_to_cart" />
            Add to cart
          </button>
        </div>
    );
}
export default ProductInfo;



