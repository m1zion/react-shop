import React, { Component }from 'react';
import { Slide } from "react-slideshow-image";
import cart from '@icons/bt_add_to_cart.svg';
import '@styles/ProductInfo.scss';
/* CLASE 12 */
//const ProductInfo = () => {
class ProductInfo extends Component {
    constructor() {
        super();
        this.slideRef = React.createRef();
        this.back = this.back.bind(this);
        this.next = this.next.bind(this);
        this.state = {
          current: 0
        };
    }
    back() {
        this.slideRef.current.goBack();
    }

    next() {
        this.slideRef.current.goNext();
    }
    render (){


        const properties = {
            duration: 5000,
            autoplay: false,
            transitionDuration: 500,
            arrows: false,
            infinite: true,
            easing: "ease",
            //indicators: (i) => <div className="indicator2">{i + 1}</div>
            indicators: (i) => <div className="indicator2">{i}</div>
        };
        const slideImages = [
        "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        ];
        return(
        <div className="ProductInfo">
            <p> Auto Estereo Sony G347</p>
            <div className="slide-container2">
                <Slide ref={this.slideRef} {...properties}>
                    {slideImages.map((each, index) => (
                    <div key={index} className="each-slide">
                        <img className=" mainImage lazy" src={each} alt="sample" />
                    </div>
                    ))}
                </Slide>
            </div>
            <div className="productInfo-price-container">
                <div className="priceInfo">
                <p>Oferta valida: 10:25:30</p>
                <p>Precio Normal</p>
                <p>Precio descuento</p>
                <p>Numero de Productos</p>
                <p>SKU: KL029KKSLL966</p>
                </div>
                <div className="productActions">
                <div className="productActionsButtons">
                    <button className="primary-button primary-button-detail">Comprar</button>
                    <button className="primary-button primary-button-detail">Agregar al carrito</button>
                </div>
                <p>20 Disponibles</p>
                </div>
            </div>
            <div className='productInfo-description-container'>
                <p>Descripción</p>
                <p>La línea de receptores NEX o Networked Entertainment eXperience de Pioneer presenta 
                una nueva interfaz de usuario innovadora y potente que responde y es altamente personalizable. 
                Los modelos NEX están diseñados especialmente para el estilo de vida actual impulsado por teléfonos 
                inteligentes.</p>
                <button className="primary-button add-to-cart-button">
                <img src={ cart } alt="add_to_cart" />
                Add to cart
                </button>
            </div>

            </div>
        );
    }
}
export default ProductInfo;



