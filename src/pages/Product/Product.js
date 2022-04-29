import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import './Product.css';

const Product = ({ product }) => {
    const { name, img, description, id, price, quantity, supplier } = product;

    const handleUpdate = () => {

    }
    return (
        <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush card-list">
                <ListGroupItem><span>Price:</span> {price} BDT</ListGroupItem>
                <ListGroupItem><span>Quantity:</span> {quantity}</ListGroupItem>
                <ListGroupItem><span>Supplier:</span> {supplier}</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <button onClick={handleUpdate}>Stock Update</button>
            </Card.Body>
        </Card>
    );
};

export default Product;