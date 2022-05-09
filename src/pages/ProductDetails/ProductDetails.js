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
    const handleReStock = data => {
        console.log(data)
        const url = `http://localhost:5000/product/${productId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };

    return (
        <div className='product-details'>
            <h2 className='details-title'>Product details</h2>
            <div className='details-inner'>
                <div className='details-img'>
                    <img src={furniture.img} alt="" />
                </div>
                <div className='details-content'>
                    <div>
                        <h3 className='product-name'>{furniture.name}</h3>
                        <h5>Supplier: <span>{furniture.supplier}</span></h5>
                        <h5>Price: <span>{furniture.price}BDT</span></h5>
                        <h5>Quantity: <span>{furniture.quantity}</span></h5>
                        <p>{furniture.description}</p>

                    </div>
                    <div>
                        <button className='deliver-btn' onClick={() => handleDeliver(furniture._id)}>Deliver</button>
                        <button className='restock-btn' onClick={() => handleReStock(furniture._id)}>Re-Stock</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;