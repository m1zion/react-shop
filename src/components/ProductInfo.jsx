import React from 'react';
import cart from '@icons/bt_add_to_cart.svg';
import '@styles/ProductInfo.scss';
/* CLASE 12 */
let slideIndex = 1;
showSlides(slideIndex);
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    console.log('showslides function')
}
const ProductInfo = () => {
    return(
        <div className='container'>
            <div className='mySlides'>
                <div className='numbertext'>1 / 4</div>
                    <img className='numbertext_image' src='https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
                </div>
                <div className='mySlides'>
                <div className='numbertext'>2 / 4</div>
                    <img  className='numbertext_image' src='https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
                </div>
            
                <div className='mySlides'>
                <div className='numbertext'>3 / 4</div>
                    <img className='numbertext_image' src='https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
                </div>
            
                <div className='mySlides'>
                <div className='numbertext'>4 / 4</div>
                    <img className='numbertext_image' src='https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
                </div>

    
                <div className='caption-container'>
                <p id='caption'></p>
                </div>
            
                <div className='row'>
                <div className='column'>
                    <img className='demo cursor' src='https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'  alt='The Woods'/>
                </div>
                <div className='column'>
                    <img className='demo cursor' src='https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='Cinque Terre'/>
                </div>
                <div className='column'>
                    <img className='demo cursor' src='https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'  alt='Mountains and fjords'/>
                </div>
                <div className='column'>
                    <img className='demo cursor' src='https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'  alt='Northern Lights'/>
                </div>
            </div>
        </div>
    );
}
export default ProductInfo;



