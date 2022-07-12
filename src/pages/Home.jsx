import React from 'react';
import ProductList from '../containers/ProductList';
import ProductCarrousel from '../containers/ProductCarrousel';
const Home = () =>{
    return (
        /*<div>
            React Home
        </div>
        <Header/>*/
        <>    
            <section className="main-container">
            <p>Soluciones para tu auto</p>
            <ProductList/>
            <ProductCarrousel />
            </section>
        </>
    );
}
export default Home;