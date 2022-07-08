import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cart from '@icons/bt_add_to_cart.svg';
import '@styles/ProductInfo.scss';
import imagenMuestra from '@images/seeanddo-1000x1000-2.jpg';
/* CLASE 12 */
function ProductInfo() {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);

    useEffect(() => {
        setNav1(slider1);
        setNav2(slider2);
    });
    const settingsMain = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    };
    
    const settingsThumbs = {
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        swipeToSlide: true,
        focusOnSelect: true,
        centerPadding: '10px'
    };
         
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        lazyLoad: 'progressive', //It could also be ondemand
        responsive: [
            {
            breakpoint: 400,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
            }
        ]
    };
    const slidesData = [
        {
          id: 1,
          title: 'repellendus id ullam',
          label: 'Dolorem officiis temporibus.'
        }, {
          id: 2,
          title: 'excepturi consequatur est',
          label: 'Officia non provident dolor esse et neque.'
        }, {
          id: 3,
          title: 'eius doloribus blanditiis',
          label: 'Ut recusandae vel vitae molestiae id soluta.'
        }, {
          id: 4,
          title: 'nihil voluptates delectus',
          label: 'Qui vel consequatur recusandae illo repellendus.'
        }, 
    ];



  return (
    <div className="ProductInfo">
    <p> </p>
    <div className="slider-wrapper-a">
        <Slider
          {...settingsMain}
          asNavFor={nav2}
          ref={slider => (setSlider1(slider))}
        >
        {slidesData.map((slide) =>
            <div className="slick-slide" key={slide.id}>
              <h2 className="slick-slide-title">Auto Estereo Sony G347</h2>
              {/*<h2 className="slick-slide-title">{slide.title}</h2>*/}
              <img className="slick-slide-image-a" src={imagenMuestra} />
            </div>

          )}
        </Slider>
        <div className="thumbnail-slider-wrap">
          <Slider
            {...settingsThumbs}
            asNavFor={nav1}
            ref={slider => (setSlider2(slider))}>
            {slidesData.map((slide) =>
              <div className="slick-slide" key={slide.id}>
                <img className="slick-slide-image-a" src={`https://picsum.photos/800/400?img=${slide.id}`} />
              </div>
            )}
          </Slider>
        </div>
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


export default ProductInfo;



