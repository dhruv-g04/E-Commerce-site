import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { LuIndianRupee } from "react-icons/lu"

function ProductDetail(props) {
    console.log(props);
    return (
        <section id="single-pro">
            <Header />
            <div id="prodetails" className="section-p1">
                <div className="single-pro-img">
                    <img src="/images/car.png" id="main-img" alt="Product Image" />
                    <div className="small-img-group">
                        <div className="small-img-col">
                            <img src="/images/glass.png" className="small-img" />
                        </div>
                        <div className="small-img-col">
                            <img src="/images/car.png" className="small-img" />
                        </div>
                        <div className="small-img-col">
                            <img src="/images/glass.png" className="small-img" />
                        </div>
                        <div className="small-img-col">
                            <img src="/images/car.png" className="small-img" />
                        </div>
                    </div>
                </div>
                <div className="single-pro-details">
                    <div className="name">
                        <h6>Car</h6>
                        <h4>Hundai Verna</h4>
                    </div>
                    <h2><LuIndianRupee />1024.00</h2>
                    <button className="normal">Add To WishList</button>
                    <h4>Product Details</h4>
                    <span>ADDITIONAL VEHICLE INFORMATION:
                        Color: RedInsurance Type: No Insurance Make Month: November Registration Place: TN Honda City,2012/9 model,, comprehensive insurance veled 2023/9,,VMT model Single owner full insurance ,,km run 35000 only ,, Excellent condition car</span>
                    <h4>Seller Details</h4>
                    <p>Name: <span>Ramesh Kumar</span></p>
                    <p>Mobile no.: <span>90456XXX34</span></p>
                    <p>Address: <span>5A Ram Vihar Colony, Rawatpur, Kanpur</span></p>
                    <p>Pincode: <span>408032</span></p>
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default ProductDetail;