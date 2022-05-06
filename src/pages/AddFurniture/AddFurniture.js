import React from 'react';
import { useForm } from "react-hook-form";
import './AddFurniture.css';

const AddFurniture = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/product`;
        fetch(url, {
            method: 'POST',
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
        <div className='add-product-section'>
            <h2>Add Furniture</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='form-field'>
                <input placeholder="Furniture Name" {...register("name", { required: true, maxLength: 20 })} />
                <input placeholder="Price" type="number" {...register("price")} />
                <input placeholder="Quantity" type="number" {...register("quantity")} />
                <input placeholder="Supplier" type="text" {...register("supplier")} />
                <input placeholder="Image url" type="text" {...register("img")} />
                <textarea placeholder="Description" {...register("description")} />
                <input type="submit" value="Add Furniture" />
            </form>
        </div>
    );
};

export default AddFurniture;