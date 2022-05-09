import { useEffect, useState } from "react";

const useLoadData = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`https://vast-taiga-73720.herokuapp.com/products`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return [products, setProducts];
}

export default useLoadData;

