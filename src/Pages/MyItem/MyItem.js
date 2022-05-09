import React from 'react';
import useLoadData from '../../hooks/useLoadData';
import ManageItemsSingle from './ManageItemsSingle';
import './MyItems.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const MyItems = () => {
    const [products, setProducts] = useState();


    return (
        <div className='container mt-2 '>
            <div className='add-more-button'><Link as={Link} to="/add">ADD MORE</Link></div>
            <div className='add-item-section'>
                <div>
                    <form >

                    </form>
                </div>
            </div>
            <h1 className='text-center ' style={{ fontSize: "4rem" }}>Manage Your Products</h1>
            <table className='mx-auto mt-3' style={{ border: "3px solid black" }}>
                <tr>
                    <td className='fw-bold'>Name</td>
                    <td className='fw-bold'>Quantity</td>
                    <td className='fw-bold'>Sold</td>
                    <td className='fw-bold'>Supplier</td>
                    <td className='fw-bold' colSpan={2}>Manage</td>
                </tr>
                {
                    // P stands for product
                    products.map(p => <ManageItemsSingle
                        key={p._id}
                        p={p}
                    ></ManageItemsSingle>)
                }
            </table>
        </div>
    );
};

export default MyItems