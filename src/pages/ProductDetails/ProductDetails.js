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
    }, [])

    return (
        <div>
            <h2>This is product details of id: {furniture.name}</h2>
        </div>
    );
};

export default ProductDetails;