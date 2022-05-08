import React from 'react';
import { Card, CardGroup, CarouselItem } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './SingleFeatured.css'

const SingleFeatured = ({ product }) => {
    const navigate = useNavigate();
    const { quantity, name, _id, img, price, supplier, description } = product;
    const handleNavigateManage = (id) => {
        navigate(`/manageItem/${id}`);
    }
    return (
        <div>
            <CardGroup className=' text-center'>
                <Card >
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <h2 className='fw-bold'>{name}</h2>
                        <Card.Text className='card-text'>
                            <h6> {description} </h6>
                            <h5>Price: {price}</h5>
                            <h5>Available: {quantity} pcs</h5>
                            <h5>Supplier: {supplier} pcs</h5>

                        </Card.Text>
                        <Card.Footer style={{ backgroundColor: "white" }}><button onClick={() => handleNavigateManage(_id)} className='manage-button'>Manage</button></Card.Footer>

                    </Card.Body>

                </Card>
            </CardGroup>
        </div >
    );
};

export default SingleFeatured;