import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const LoadSingleData = (id) => {
    const [product, setProduct] = useState([]);
    useEffectt(() => {
        fetch(`http://localhost:5000/product?_id=${id}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return [products];
};

export default LoadSingleData;