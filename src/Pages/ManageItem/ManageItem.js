import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './ManageItem.css'

const ManageItem = () => {
    const { id } = useParams();
    const [singleProduct, setSingleProduct] = useState([]);
    const detail = singleProduct.result;

    useEffect(() => {

        fetch(`http://localhost:5000/product?id=${id}`)
            .then(res => res.json())
            .then(data => setSingleProduct(data))
    }, [])
    const handleDelivered = (id) => {
fetch()
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
                                        <td>{detail.quantity}</td>

                                    </tr>
                                    <tr>
                                        <td className='head'>Supplier Name</td>
                                        <td>{detail.supplier}</td>

                                    </tr>
                                    <tr>
                                        <td className='head'>Description</td>
                                        <td>{detail.description}</td>

                                    </tr>
                                </table>

                            </div>
                            <div className='mt-5'><img src={"https://i.ibb.co/59BzD4n/lesly-juarez-g-NYQx-I5uf-II-unsplash.jpg"} alt="" /></div>
                        </div>
                        <div className='delevered'><button onClick={() => handleDelivered(details._id)} >Delivered</button></div>
                    </div>
                    :
                    <></>
            }


        </div >
    );
};

export default ManageItem;