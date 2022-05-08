import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateItem = () => {
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
            <h2>Update item </h2>
        </div>
    );
};

export default UpdateItem;