import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BsBagHeart, BsPerson } from "react-icons/bs";
function Heading() {
    const [show, setShow] = React.useState(false);
    const callAboutUser = async () => {
        try {
            const res = await fetch(process.env.REACT_APP_BACKEND_URL + "api/users/aboutuser", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
            });
            const data = await res.json();
            console.log("header", data);
            setShow(true);

            if (!res.status === 200) {
                throw new Error(res.error);
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        callAboutUser();
    }, []);

    return (
        <section id="header">
            <a id="logo" href="/"><h3><img src="images/JagranLogo.png" alt="" /> Jagran Hub</h3></a>
            <div>
                <ul id="navbar">

                    <li><Link to="/" aria-current="page">Home</Link></li>
                    <li><Link to="/allproduct" aria-current="page">All Products</Link></li>
                    <li><Link to="/sell">Sell</Link></li>
                    {show ? <>
                        <li><Link to="/logout" >Logout</Link></li>
                    </> : <>
                        <li><Link to="/login" >Login</Link></li>
                        <li><Link to="/signup">Sign Up</Link></li>
                    </>}
                    <li><Link to="/wishlist" ><BsBagHeart /></Link></li>
                    <li><Link to="/mydetails" ><BsPerson /></Link></li>
                </ul>
            </div>
        </section>
    )
}

export default Heading;