import React,{ useEffect, useState } from 'react';
import axios from 'axios';
import Header from "./Header";
import Grid from "./Grid";

// import { cardsList } from "./data";
import Footer from "./Footer";
// import { use } from 'passport';

function AllProduct() {
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
    return (
        <div id="box">
            <Header />
            <Grid heading="All Products" prodList={products} />
            <Footer />
        </div>
    )
}
export default AllProduct;