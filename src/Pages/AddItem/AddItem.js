import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';

import { toast } from 'react-toastify';
import auth from './../../firebase.init';

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth)

    const onSubmit = (data) => {
        const url = 'https://vast-taiga-73720.herokuapp.com/products';
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => console.log(res));

        toast.success('Item Added');
    };

    return (
        <div className='w-50 mx-auto my-5'>
            <h2 className='text-center'>Add New Item</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='m-2 py-1 fs-3 rounded-lg ps-3' placeholder='Added By' value={user?.email} readOnly {...register("email")} />
                <input className='m-2 py-1 fs-3 rounded-lg ps-3' placeholder='Item Name' {...register("name")} />
                <input className='m-2 py-1 fs-3 rounded-lg ps-3' placeholder='Price' type="number" {...register("price")} />
                <input className='m-2 py-1 fs-3 rounded-lg ps-3' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='m-2 py-1 fs-3 rounded-lg ps-3' placeholder='Supplier Name' type="text" {...register("supplier")} />
                <input className='m-2 py-1 fs-3 rounded-lg ps-3' placeholder='Photo Url' type="text" {...register("img")} />
                <textarea className='m-2 py-1 fs-3 rounded-lg ps-3' placeholder='Description' {...register("description")} />
                <div className='text-center mt-3 rounded-xl'><input className='btn btn-dark fs-3 w-50 ' type="submit" value="Add Item" /></div>
            </form>
        </div>
    );
};

export default AddItem;