import { useEffect, useState } from 'react';
import axios from 'axios';

// Custom hook to fetch data
const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/api/products')
            .then((response) => {
                setProducts(response.data);
                console.log("products");
                console.log(response.data);
            }).catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return products; // Return the products array to be used in other components
};

export default useProducts;
