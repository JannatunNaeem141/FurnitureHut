import React from 'react';
import useProducts from '../../hooks/useProducts';
import Product from '../Product/Product';
import './HomeProducts.css';

const HomeProducts = () => {
    const [products, setProducts] = useProducts();
    const sixProducts = products.slice(0, 6);
    console.log(sixProducts);
    return (
        <div className='home-products'>
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