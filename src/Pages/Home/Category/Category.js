import React from 'react';
import './Category.css'
import { Link } from 'react-router-dom';

const Category = () => {
    return (
        <div className='category-body'>
            <div >
                <ul className='list h2 '>
                    <h2 className='text-center'>Catagories</h2>
                    <li as={Link} to="manageItems">Bat</li>
                    <li as={Link} to="manageItems">Ball</li>
                    <li as={Link} to="manageItems">Tennis</li>
                    <li as={Link} to="manageItems">Football</li>
                    <li as={Link} to="manageItems">Hocky</li>
                    <li as={Link} to="manageItems">Hadudu</li>
                    <li as={Link} to="manageItems">Volleyball</li>
                    <li as={Link} to="manageItems">Golf</li>
                    <li as={Link} to="manageItems">Badminton</li>
                    <li as={Link} to="manageItems">Basketball</li>


                </ul>
            </div>

        </div>
    );
};

export default Category;