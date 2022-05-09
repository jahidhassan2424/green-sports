import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCirclePlus, faCoffee, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import useLoadData from '../../hooks/useLoadData';
import { useState } from 'react';

const ManageItemsSingle = ({ p }) => {
    const navigate = useNavigate();
    const { name, quantity, supplier, sold, _id } = p;
    const [products, setProducts] = useLoadData();
    const handleAddItem = (id) => {
        navigate(`/manageItem/${id}`);
    }
    const handleRemoveItem = async (id) => {
        const result = fetch(`http://localhost:5000/product?id=${id}`, {
            method: 'delete',
        })
            .then(res => res.json())
            .then(data => {
                const remaining = products.filter(product => product._d !== id)
                console.log('Remaining:', remaining);
                setProducts(remaining);
            })




    }

    return (
        <tr>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>{sold}</td>
            <td>{supplier}</td>
            <td onClick={() => handleAddItem(_id)} style={{ cursor: "pointer", fontSize: "25px" }} className='text-center text-success'><FontAwesomeIcon icon={faCirclePlus} /></td>

            <td onClick={() => handleRemoveItem(_id)} style={{ cursor: "pointer", fontSize: "25px" }} className='text-center text-danger'><FontAwesomeIcon icon={faTrashCan} /></td>


        </tr>
    );
};

export default ManageItemsSingle;