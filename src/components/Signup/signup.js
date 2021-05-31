import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './signup.css';

const Signup = () => {

    const [register, setRegister] = useState({
        username: '',
        email: '',
        password: ''
    })

    const { username, email, password } = register

    const onChange = e => setRegister({ ...register, [ e.target.name] : e.target.value })

    return (
    <div className="flex registerForm w-screen h-screen">
            <div className="col-md-4 imgback text-center p-10">
                <h3 className="font-semibold mb-3">Welcome To Greenhouse</h3>
                <p>Enter your personal details to <br/> start your journey with us</p>
            </div>

            <div className="col-md-8 col-xs-12 col-sm-12 register_form">
                
                <form className="form-group">
                    <div className="row">
                        <h1 className="md:ml-36 font-semibold">Create Account</h1>
                    </div>
                    {/* social media buttons */}
                    <div className="row svg flex space-x-4  mt-4">
                        <a href="https://www.facebook.com">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" className="flex-1 m-1" viewBox="0 0 24 24" fill="#6d736e">
                                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 
                                10h-2v2h2v6h3v-6h1.82l.18-2h-2v-.833c0-.478.096-.667.558-.667h1.442v-2.5h-2.404c-1.798 0-2.596.792-2.596 2.308v1.692z"/>
                            </svg>
                        </a>

                        <a href="google.com">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" className="flex-1 m-1" viewBox="0 0 24 24" fill="#6d736e">
                                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 
                                5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.5 11.5v1.2h1.985c-.08.514-.601 1.51-1.985 1.51-1.194 0-2.17-.99-2.17-2.21s.976-2.21 2.17-2.21c.681 0 
                                1.135.29 1.396.541l.949-.916c-.61-.57-1.401-.915-2.345-.915-1.936 0-3.5 1.565-3.5 3.5s1.564 3.5 3.5 3.5c2.02 0 3.359-1.419 3.359-3.419 0-.23-.024-.405-.055-.58h-3.304zm0 0
                                8.5 1h-1.5v1.5h-1v-1.5h-1.5v-1h1.5v-1.5h1v1.5h1.5v1z"/>
                            </svg>
                        </a>
                        <a href="linkedin.com"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" className="flex-1 m-1" viewBox="0 0 24 24" fill="#6d736e">
                            <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 
                            5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447
                            1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 
                            0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z"/>
                            </svg>
                        </a>
                    </div>
                    
                    <div className="row md:ml-20 mb-6">
                        <p className="mt-8 text-center">Or use your email for registration</p>
                    </div>
                    {/* Username input */}
                    <div className="row md:ml-44 mb-3.5">
                    <input 
                        className="ml-40 mb-6 mt-8 focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-transparent"
                        type="text" 
                        placeholder="Username"
                        name="username"
                        value={username}
                        onChange={onChange}
                        required/>
                    </div>
                    {/* Email input */}
                    <div className="row md:ml-44 mb-3.5">
                    <input 
                        className="ml-40 mb-6 mt-8 focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-transparent"
                        type="text" 
                        placeholder="Email"
                        name="email" 
                        value={email}
                        onChange={onChange}
                        required/>
                    </div>
                    {/* Password input */}
                    <div className="row md:ml-44 mb-3.5">
                    <input 
                        className="ml-40 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        type="password" 
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={onChange}
                        required/>
                    </div>
                    {/* Submit button */}
                    <div className="row md:ml-40">
                        <button className="btn registerSubmit p-2">SIGN UP</button><br></br>
                    </div>

                    <div className="flex md:ml-80 ml-12 mt-3">
                        <Link to="/signin" className="text-lg text-center cursor-pointer">Already a member</Link>
                        <svg className="ml-4 mt-0.5 cursor-pointer " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#9CA3AF"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.218 19l-1.782-1.75 5.25-5.25-5.25-5.25 1.782-1.75 6.968 7-6.968 7z"/></svg>
                    </div>
                </form>
            </div>
    </div>
    )
}

export default Signup
