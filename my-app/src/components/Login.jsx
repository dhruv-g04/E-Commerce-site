import React from "react";
import axios from "axios";
function Login() {
    const [loginText, setLoginText] = React.useState({
        username: "",
        password: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setLoginText((prevvalue) => {
            return {
                ...prevvalue,
                [name]: value
            };
        });
    }
    const login = (event) => {
        event.preventDefault();
        axios({
            method: "post",
            data: {
                username: loginText.username,
                password: loginText.password
            },
            withCredentials: true,
            url: "http://localhost:4000/login"
        }).then((res) => {
            if (res.data.message === "Successfully Authenticated") {
                window.location = "/"; // Redirect to a new page after successful authentication
                alert("Login Successfully")
            }
            else if (res.data.message === "No User exists") {
                alert("No User exist")
            }
             else {
                alert("Wrong User id or Password");
            }
            // window.location = "/";
            // alert(res.data.message)
            // console.log("hi");
        }).catch((error) => {
            alert("Error occur")
            console.error("Error during login:", error);
        });
    };
    return (
        <div>
            <div className="container">
                <img src="/images/login4.png" alt="No img available" />
                <div className="sub-container">
                    <h2>
                        Login
                    </h2>
                    <form >
                        <input
                            onChange={handleChange}
                            name="username"
                            type="text"
                            value={loginText.username}
                            placeholder="User Name"
                        />
                        <input
                            onChange={handleChange}
                            name="password"
                            type="password"
                            value={loginText.password}
                            placeholder="Password"
                        />
                        <button onClick={login} className="normal">Login</button>
                    </form>
                    <p>Not a member? <a href="/signup">Sign Up</a> Now</p>
                </div>
            </div>
        </div>
    )
}

export default Login;