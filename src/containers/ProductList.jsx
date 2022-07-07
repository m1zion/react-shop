import React from 'react';
import ProductItem from '@components/ProductItem';
import useGetProducts from '@hooks/useGetProducts';
import '@styles/ProductList.scss';
//A partir de la clase 22 cambia useState por useContext
//La funcionalidad se manda al hook useGetProducts
//https://api.escuelajs.co/docs/
//https://api.escuelajs.co/api/v1/products?limit=1&offset=10

let limit = '?limit='+'10';
let offset = '&offset='+'1';
const API = 'https://api.escuelajs.co/api/v1/products'+limit+offset;
const ProductList = () => {
    const products = useGetProducts(API);
    return (
        <section className="main-container">
            <div className="ProductList">
                {
                    products.map(product => (
                        <ProductItem  product={product}  key={product.id}/>
                    ))
                }
            </div>
        </section>
    );
}

export default ProductList;
