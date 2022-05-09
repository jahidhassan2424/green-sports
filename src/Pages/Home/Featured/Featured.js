import React from 'react';
import useLoadData from '../../../hooks/useLoadData';
import SingleFeatured from './SingleFeatured/SingleFeatured';
import './Featured.css'

const Featured = () => {
    const [products] = useLoadData();
    return (
        <div className='featured-section'>

            {

                products.slice(0, 6).map(product => <SingleFeatured
                    key={product._id}
                    product={product}
                ></SingleFeatured>)
            }
        </div>
    );
};

export default Featured;