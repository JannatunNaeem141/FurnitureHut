import React from 'react';
import { useForm } from "react-hook-form";
import './AddFurniture.css';

const AddFurniture = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = `https://powerful-citadel-88878.herokuapp.com/product`;
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
            <div className='add-inner'>
                <h2 className='add-title'>Add Furniture</h2>
                <form onSubmit={handleSubmit(onSubmit)} className='form-field'>
                    <input placeholder="Furniture Name" {...register("name", { required: true, maxLength: 20 })} />
                    <input placeholder="Price" type="number" {...register("price")} />
                    <input placeholder="Quantity" type="number" {...register("quantity")} />
                    <input placeholder="Supplier" type="text" {...register("supplier")} />
                    <input placeholder="Image url" type="text" {...register("img")} />
                    <textarea placeholder="Description" {...register("description")} />
                    <div className='add-btn'>
                        <button>Add Furniture</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddFurniture;