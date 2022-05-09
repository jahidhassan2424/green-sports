import React from 'react';
import { useState, useEffect } from 'react';


const useLoadSingleData = (id) => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch(`https://vast-taiga-73720.herokuapp.com/product?_id=${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return { product };
};

export default useLoadSingleData;