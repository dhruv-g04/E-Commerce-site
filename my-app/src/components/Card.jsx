import React from "react";
// import ProductDetail from "./ProductDetail";
import { useNavigate } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { LuIndianRupee } from "react-icons/lu";
function Card(product) {
    console.log(product);
    const navigate = useNavigate();

    const navigateToProduct = () => {
        navigate('/product?props='+{product});
    };
    function showProduct(event){
        console.log(product);
    }
    return (
        <div  className="card">
            <img onClick={navigateToProduct} src={process.env.PUBLIC_URL + "/uploads/"+(product.img ? product.img : "no-img.png")} alt="" />
            <div  onClick={navigateToProduct} className="des">
                <span>{product.catagory}</span>
                <h5>{product.brand}</h5>
                <h4><LuIndianRupee /> {product.price}</h4>
            </div>
            <div className="heart" onClick={showProduct}>
                <AiOutlineHeart />
            </div>
        </div>
    )
}
export default Card;