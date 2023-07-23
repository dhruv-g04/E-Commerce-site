import React, { useState } from "react";
import axios from 'axios';
import Heading from "./Header";
import Footer from "./Footer";
function Sell() {
    const [data, setData] = useState({
        owner: "",
        contact: "",
        address: "",
        pincode: 0,
        category: "",
        model: "",
        price: "",
        description: "",
        img: null
    });

    function handleChange(event) {
        const { name, value } = event.target;
        // console.log(name, ":", value);
        if (name === "img") {
            const imageFile = event.target.files[0];
            setData((prevValue) => {
                return {
                    ...prevValue,
                    [name]: imageFile, // Update the state with the selected image file
                };
            });
        }
        else {
            setData((prevvalue) => {
                return {
                    ...prevvalue,
                    [name]: value
                };
            });
        }
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/upload', data, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.status === 200) {
                alert(response.data.message);
            }


            // setData({
            //     owner: "",
            //     contact: "",
            //     address: "",
            //     pincode: "",
            //     category: "",
            //     model: "",
            //     price: "",
            //     description: "",
            //     img: null
            // });
        } catch (error) {
            console.log('Error uploading data:', error);
            alert('Error uploading data. Please try again.');
        };
    };

    return (
        <section>
            <Heading />
            <section id="form-details" className="section-p1">
                <div className="proHead">
                    <h2>#sell_it</h2>
                </div>
                <div className="Box">
                    <form>
                        <p style={{ color: 'red', fontWeight: 'bold' }}>*Required Feild</p>
                        <h4>Personal Details</h4>
                        <input type="text" name="owner" placeholder="*Owner's Name" onChange={handleChange} value={data.owner} required></input>
                        <input type="tel" name="contact" placeholder="*Contact No." pattern="[0-9]{10}" maxLength="10" onChange={handleChange} value={data.contact} required></input>
                        <input type="text" name="address" placeholder="Address" onChange={handleChange} value={data.address}></input>
                        <input type="text" name="pincode" placeholder="Pincode" pattern="[0-9]{6}" maxLength="6" onChange={handleChange} value={data.value}></input>

                        <h4>Product Details</h4>
                        <input type="text" name="category" placeholder="*Category" onChange={handleChange} value={data.category} required></input>
                        <input type="text" name="model" placeholder="*Model" onChange={handleChange} value={data.model} required></input>
                        <input type="number" name="price" placeholder="*Price (in Rs)" onChange={handleChange} value={data.price} required></input>
                        <textarea type="text" name="description" rows="4" cols="65%" placeholder="Description" onChange={handleChange} value={data.description}></textarea>
                        <label htmlFor="file-input">Select an Image</label>
                        <input
                            type="file"
                            id="file-input"
                            accept="image/*"
                            name="img"
                            onChange={handleChange}
                        />
                        <button onClick={handleSubmit} className="normal">Submit</button>
                    </form>
                    <img src="/images/sell_it.png" alt="Deal" />
                </div>
            </section>
            <Footer />
        </section>
    )
}

export default Sell;