import React, { useState } from 'react';
import cover from '../assets/images/login.png';
import { Link } from 'react-router-dom';

function Login() {
    const [state, setState] = useState("Login");
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const changeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the form from reloading the page on submit
        try {
            const response = await fetch('http://localhost:4000/login', {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const responseData = await response.json();

            if (responseData.success) {
                localStorage.setItem("auth-token", responseData.token);
                window.location.replace("/"); // Redirect to homepage on success
            } else {
                alert("Invalid email or password"); // Show error message if login fails
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <div className="flex h-screen">
            <div className="flex-1 bg-gray-100">
                <img src={cover} alt='cover' className="object-cover w-full h-full" />
            </div>
            <div className="flex items-center justify-center flex-1 bg-white">
                <div className="flex flex-col items-center justify-center flex-1 bg-white">
                    <h2 className="mb-20 text-4xl font-bold text-center text-loginColor font-istockWeb">Login</h2>
                    <form onSubmit={handleSubmit} className='flex flex-col items-center'>
                        <div className='relative mb-6'>
                            <input 
                                type='email' 
                                id='email' 
                                name='email'
                                value={formData.email}
                                onChange={changeHandler} 
                                placeholder='Enter your email' 
                                className='block w-72 py-2.5 px-0 text-sm text-black border-0 border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-black'
                            />
                        </div>
                        <div className='relative '>
                            <input 
                                type='password' 
                                id='password' 
                                name='password' 
                                value={formData.password}
                                onChange={changeHandler}
                                placeholder='Enter Password' 
                                className='block w-72 py-2.5 px-0 text-sm text-black border-0 border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-black'
                            />
                        </div>
                        <div className="py-4 mt-5 text-xs text-loginColor">
                            <Link to="/forgetpassword">Forgot your password?</Link>
                        </div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 mt-5 mb-2 text-white rounded font-istockWeb bg-logingbutton hover:bg-black"
                        >
                            Login
                        </button>
                    </form>
                    <div className="flex items-center justify-between mt-3 text-xs text-NavBlue ">
                        <p className="mr-2">Don't have an account?</p>
                        <Link to="/register">
                            <button className="px-5 py-2 text-sm duration-300 bg-white border rounded-xl hover:scale-110" onClick={() => setState("Register")}>Register</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
