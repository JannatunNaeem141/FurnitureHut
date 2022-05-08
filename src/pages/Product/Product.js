import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Product.css';

const Product = ({ product }) => {
    const { name, img, description, _id, price, quantity, supplier } = product;
    const navigate = useNavigate();

    const handleUpdate = (id) => {
        navigate(`/product/${id}`);
    }
    return (
        <Card className='each-card'>
            <Card.Img className='card-img' variant="top" src={img} />
            <Card.Body>
                <Card.Title className='card-title'>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush card-list">
                <ListGroupItem className='card-list-item'><span>Price:</span> {price} BDT</ListGroupItem>
                <ListGroupItem className='card-list-item'><span>Quantity:</span> {quantity}</ListGroupItem>
                <ListGroupItem className='card-list-item'><span>Supplier:</span> {supplier}</ListGroupItem>
            </ListGroup>
            <Card.Body className='btn-body'>
                <button className='stock-update-btn' onClick={() => handleUpdate(_id, name, img)}>Stock Update</button>
            </Card.Body>
        </Card>
    );
};

export default Product;