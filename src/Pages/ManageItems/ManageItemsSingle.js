import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCirclePlus, faCoffee, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const ManageItemsSingle = ({ p }) => {
    const navigate = useNavigate();
    const { name, quantity, supplier, sold, _id } = p;
    let count = 1;
    const handleAddItem = () => {
        navigate
    }
    const handleRemoveItem = () => {

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