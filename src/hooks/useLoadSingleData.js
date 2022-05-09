import React from 'react';
import { useState, useEffect } from 'react';


const useLoadSingleData = (id) => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/product?_id=${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return { product };
};

export default useLoadSingleData;