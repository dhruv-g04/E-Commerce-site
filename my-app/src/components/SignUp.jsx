import React, { useState } from "react";
import axios from 'axios';
function Signup() {
    const [signupText, setSignupText] = useState({
        name: "",
        username: "",
        password: ""
    });
    function handleChange(event) {
        const { name, value } = event.target;
        setSignupText((prevvalue) => {
            return {
                ...prevvalue,
                [name]: value
            };
        });
    }
    const register = (event) => {
        event.preventDefault();
        axios({
            method: "post",
            data: {
                username: signupText.username,
                name: signupText.name,
                password: signupText.password
            },
            withCredentials: true,
            url: "http://localhost:4000/register"
        }).then((res) => {
            if (res.data.message === "User created successfully") {
                window.location = "/"; // Redirect to a new page after successful authentication
                alert("Register Successfull")
            }
            else if (res.data.message === "User already exists") {
                alert("User already exists")
            }
            else {
                alert("Internal Server Error");
            }
            // console.log(res)
            // window.location = "/";
            // alert("Register Successfull")
        }).catch((error) => {
            alert("Internal Server Error");
            console.error("Error during registration:", error);
        });
    };
    return (
        <div>
            <div className="container">
                <img src="/images/login.png" alt="Sign Up" />
                <div className="sub-container">
                    <h2>
                        Sign Up
                    </h2>
                    <form >
                        <input
                            onChange={handleChange}
                            name="name"
                            type="text"
                            value={signupText.name}
                            placeholder="Full Name"
                        />
                        <input
                            onChange={handleChange}
                            name="username"
                            type="text"
                            value={signupText.username}
                            placeholder="User Name"
                        />
                        <input
                            onChange={handleChange}
                            name="password"
                            type="password"
                            value={signupText.password}
                            placeholder="Password"
                        />
                        <button type="submit" onClick={register} className="normal">Sign Up</button>
                        <p>Already a member? <a href="/login">Login</a></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup;