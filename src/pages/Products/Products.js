import React from 'react';
import { Link } from 'react-router-dom';
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
            <div className='manage-btn'>
                <Link className='manage-all-btn' to='/manageall'>Manage All</Link>
                <Link to='/addproduct' className='add-furniture-btn for-margin'>Add New Furniture</Link>
            </div>
        </div>
    );
};

export default Products;