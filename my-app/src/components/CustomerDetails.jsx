import React, { useEffect } from 'react';
import Header from "./Header";
import Grid from "./Grid";
import Footer from "./Footer";
import { cardsList } from './data';
function CustomerDetails() {
    return (
        <div id="box">
            <Header />
            <div className="section-p1 id">
                <p>Name: <span>Ramesh Kumar</span></p>
                <p>Mobile no.: <span>90456XXX34</span></p>
                <p>Address: <span>5A Ram Vihar Colony, Rawatpur, Kanpur</span></p>
                <p>Pincode: <span>408032</span></p>
            </div>
            {cardsList ? <Grid heading="Your Ads" cardsList={cardsList} /> : null}
            <Footer />
        </div>
    )
}
export default CustomerDetails;