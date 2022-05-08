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
            const url = `http://localhost:5000/product/${id}`;
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
            <h2>Manage Furnitures</h2>
            <Table Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Supplier</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product =>
                            <tr key={product._id}>
                                <td>{product.name}</td>
                                <td>{product.supplier}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td><button onClick={() => handleDelete(product._id)}>Delete</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
            <Link to='/addproduct'>Add New Furniture</Link>
        </div >
    );
};

export default ManageAll;


