import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = () => {
    const { productId } = useParams();
    const [furniture, setFurniture] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFurniture(data))
    }, []);

    const handleDeliver = id => {
        const url = `http://localhost:5000/product/${productId}`;
        const newQuantity = furniture.quantity - 1;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newQuantity)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };
    // const handleReStock = data => {
    //     console.log(data)
    //     const url = `http://localhost:5000/product/${productId}`;
    //     fetch(url, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     })
    //         .then(res => res.json())
    //         .then(result => {
    //             console.log(result);
    //         })
    // };

    return (
        <div>
            <h2>Product details</h2>
            <h3>Name: {furniture.name}</h3>
            <h3>Price: {furniture.price}</h3>
            <h3>Quantity: {furniture.quantity}</h3>
            <h3>Supplier: {furniture.supplier}</h3>
            <button onClick={() => handleDeliver(furniture._id)}>Deliver</button>
            {/* <button onClick={() => handleReStock(furniture._id)}>Re-Stock</button> */}
        </div>
    );
};

export default ProductDetails;