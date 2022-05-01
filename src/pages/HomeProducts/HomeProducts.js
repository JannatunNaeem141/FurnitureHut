import React from 'react';
import useProducts from '../../hooks/useProducts';
import Product from '../Product/Product';
import './HomeProducts.css';

const HomeProducts = () => {
    const [products, setProducts] = useProducts();
    const sixProducts = products.slice(0, 6);
    return (
        <div className='home-products'>
            <h2>Products</h2>
            <div className='sixProducts'>
                {
                    sixProducts.map(product => <Product key={product.id}
                        product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default HomeProducts;