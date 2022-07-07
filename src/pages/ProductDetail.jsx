import React from 'react';
import ProductInfo from '@components/ProductInfo';
import '@styles/ProductList.scss';
import ProductList from '../containers/ProductList';
import '@styles/ProductInfo.scss';

const ProductDetail = () => {
    return (
        <section className="main-container">
            <div className="ProductList">
                <ProductInfo />
            </div>
        </section>
    );
}
export default ProductDetail;