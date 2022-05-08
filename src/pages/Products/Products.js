import React from 'react';
import useProducts from '../../hooks/useProducts';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useProducts();
    return (
        <div className='products-section'>
            <h2 className='products-title'>All Products</h2>
            <div className='all-products'>
                {
                    products.map(product => <Product key={product._id}
                        product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;