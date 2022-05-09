import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './ManageItem.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ManageItem = () => {
    const { id } = useParams();
    const [singleProduct, setSingleProduct] = useState([]);
    // This state will re-fetch updated data
    const [status, setStatus] = useState(0);
    const detail = singleProduct?.result;

    useEffect(() => {
        fetch(`https://vast-taiga-73720.herokuapp.com/product?id=${id}`)
            .then(res => res.json())
            .then(data => setSingleProduct(data))

    }, [status])

    const handleDeliveredOrAdd = async (id, method) => {
        // Quantity will be removed by one 
        let quantityChange;
        (method === "delivered") ? quantityChange = detail?.quantity - 1 : quantityChange = detail?.quantity + 1;
        console.log(quantityChange)
        const sold = detail?.sold + 1;
        const add = 1;
        let body;
        const url = `https://vast-taiga-73720.herokuapp.com/product?id=${id}`;
        (method === "delivered") ? body = { id, quantityChange, sold } : body = { id, quantityChange, add };
        const result = await axios.put(url, body);
        // setStatus two times because if the value doesn't change re-fetch will not work
        setStatus(result.status);
        console.log(result);
        setStatus(0);
        toast.success(`Data Updated Succesfully`, { autoClose: 1500 });
    }

    const handlePrecessAddMore = event => {
        event.preventDefault();
        const handleAddMore = async () => {
            const previousQuantity = detail.quantity;
            const newQuantity = previousQuantity + parseInt(event.target.quantity.value);
            const quantityChange = newQuantity;
            const id = detail._id;
            const url = `https://vast-taiga-73720.herokuapp.com/product?id=${id}`;
            const body = {
                id, quantityChange
            }
            const result = await axios.put(url, body);
            setStatus(result.status);
            console.log(result);
            setStatus(0);
            toast.success(`Data Updated Succesfully`, { autoClose: 1500 });
        }

        handleAddMore();
        event.target.reset();
    }

    return (
        <div className='container h2'>

            {
                singleProduct.result
                    ?

                    < div >
                        <div className='single-product-detail'>
                            <div>
                                <table className='mt-5 rounded-xl'>
                                    {/* <thead>Details</thead> */}
                                    <tbody>
                                        <tr>
                                            <td className='head'>Name</td>
                                            <td>{detail.name}</td>
                                        </tr>
                                        <tr>
                                            <td className='head'>Price</td>
                                            <td>{detail.price}</td>

                                        </tr>
                                        <tr>
                                            <td className='head'>Available</td>
                                            <td>{detail.quantity}</td>

                                        </tr>
                                        <tr>
                                            <td className='head'>Sold</td>
                                            <td>{detail.sold}</td>

                                        </tr>
                                        <tr>
                                            <td className='head'>Supplier Name</td>
                                            <td>{detail.supplier}</td>

                                        </tr>
                                        <tr>
                                            <td className='head'>Description</td>
                                            <td>{detail.description}</td>

                                        </tr>
                                    </tbody>
                                </table>
                                <div className='d-flex flex-column justify-content-between'>
                                    <div className='delevered mt-3'><button onClick={() => handleDeliveredOrAdd(detail._id, "delivered")} >Delivered</button></div>
                                    <div className='delevered mt-3'>
                                        <form onSubmit={handlePrecessAddMore}>
                                            <input className='w-50' type="number" name="quantity" />
                                            <button  >Add More</button>
                                        </form>
                                    </div>
                                </div>

                            </div>
                            <div className='mt-5'><img src={detail.img} alt="" /></div>
                        </div>

                    </div>
                    :
                    <>

                    </>
            }


        </div >
    )
};

export default ManageItem;