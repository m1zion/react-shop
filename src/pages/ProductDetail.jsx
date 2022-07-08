import React from 'react';
import ProductInfo from '@components/ProductInfo';
import '@styles/ProductDetail.scss';
import ProductList from '../containers/ProductList';
import '@styles/ProductInfo.scss';

const ProductDetail = () => {
    return (
        <section className="main-container">
            <div className="product-detail">
                <ProductInfo />
            </div>
        </section>
    );
}
export default ProductDetail;