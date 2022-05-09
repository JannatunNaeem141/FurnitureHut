import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import './ManageAll.css';

const ManageAll = () => {

    const [products, setProducts] = useProducts();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://powerful-citadel-88878.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                })
        }
    }
    return (
        <div className='manage-section'>
            <h2 className='manage-title'>Manage Furnitures</h2>
            <Table Table striped bordered hover>
                <thead>
                    <tr>
                        <th className='text-center'>Name</th>
                        <th className='text-center'>Supplier</th>
                        <th className='text-center'>Price</th>
                        <th className='text-center'>Quantity</th>
                        <th className='text-center'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product =>
                            <tr key={product._id}>
                                <td className='text-center'>{product.name}</td>
                                <td className='text-center'>{product.supplier}</td>
                                <td className='text-center'>{product.price}</td>
                                <td className='text-center'>{product.quantity}</td>
                                <td className='text-center'><button className='delete-btn' onClick={() => handleDelete(product._id)}>Delete</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
            <div className='add-furniture'>
                <Link to='/addproduct' className='add-furniture-btn'>Add New Furniture</Link>
            </div>
        </div >
    );
};

export default ManageAll;


