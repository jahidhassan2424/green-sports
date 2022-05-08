import React from 'react';
import LoadData from './../../../hooks/LoadData';
import SingleFeatured from './SingleFeatured/SingleFeatured';
import './Featured.css'

const Featured = () => {
    const [products] = LoadData([]);
    return (
        <div className='featured-section'>
            {
                products.slice(2).map(product => <SingleFeatured
                    key={product._id}
                    product={product}
                ></SingleFeatured>)
            }
        </div>
    );
};

export default Featured;