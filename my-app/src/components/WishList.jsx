import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import WishListData from "./WishListData";
import { peoples } from "./data";
function WishList() {
    return (
        <div>
            <Header />
            <WishListData people={peoples[0]}/>
            <Footer />
        </div>
    )
}

export default WishList;