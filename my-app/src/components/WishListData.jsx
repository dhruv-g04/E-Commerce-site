import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { LuIndianRupee } from "react-icons/lu";
import {BsTelephoneFill} from "react-icons/bs";
function setRow(product) {
    return (
        <tr>
            <td><MdOutlineCancel /></td>
            <td><img src={product.image} alt="Not Found" /></td>
            <td>{product.brand} {product.catagory}</td>
            <td>{product.seller} <BsTelephoneFill/>{product.phone}</td>
            <td><span><LuIndianRupee /></span> {product.price}</td>
        </tr>
    )
}


function WishListData(props) {
    const proList = props.people.ProList;
    // console.log(props.people);
    return (
        <section id="wish-list" className="section-p1">
            <div className="proHead">
                <h2>WishList</h2>
                <span>You Like It We Save It</span>
            </div>
            <table>
                <thead>
                    <tr>
                        <td>Remove</td>
                        <td>Image</td>
                        <td>Product</td>
                        <td>Seller Details</td>
                        <td>Price</td>
                    </tr>
                </thead>
                <tbody>
                    {proList.map(setRow)}
                </tbody>
            </table>
        </section>
    )
}



export default WishListData;