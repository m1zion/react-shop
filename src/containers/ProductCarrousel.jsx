import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import '@styles/ProductInfo.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imagenMuestra from '@images/girl.jpg';
import ProductItemSm from '@components/ProductItemSm';
import useGetProducts from '@hooks/useGetProducts';
import '@styles/ProductCarrousel.scss';



function ProductCarrousel() {
    const [products,setSuggestions]= useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res=>res.json())
            .then(data=>{
                setSuggestions(data);
            });
    })
    /*const [nav1, setNav1] = useState(null);
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
    };*/

    const settings = {
        //dots: true,
        //infinite: true,
        infinite: true,
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        speed: 500,
        draggable: false,
        centerMode: false,
        /*lazyLoad: 'progressive', //It could also be ondemand*/
        responsive: [
            {
            breakpoint: 400,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 1,
            }
            }
        ]
    };

    /*
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

*/

  return (
    <div className="ProductCarrousel">
        <h3>Busquedas Populares</h3>
        {products.length===0?(
            <div>Loading</div>
        ):(
            <Slider {...settings}>
                {
                    products.map(product => (
                    <ProductItemSm  product={product}  key={product.id}/>
                    ))
                }
            </Slider>
        )}
    </div>
  );
}


export default ProductCarrousel;




/*            
                */

/*let limit = '?limit='+'8';
let offset = '&offset='+'1';
const API = 'https://api.escuelajs.co/api/v1/products'+limit+offset;
const ProductCarrousel = () => {
    const products = useGetProducts(API);
    return (
            <div className="ProductList">
                {
                    products.map(product => (
                        <ProductItemSm  product={product}  key={product.id}/>
                    ))
                }
            </div>
    );
}
export default ProductCarrousel;*/
