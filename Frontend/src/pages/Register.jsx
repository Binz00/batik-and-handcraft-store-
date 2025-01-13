import React, { useState } from 'react';
import cover from '../assets/images/Register.png';
import { Link } from 'react-router-dom';

function Register() {
    const [state, setState] = useState("Register");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        country: ""
    });

    // Handler for updating form data
    const changeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        
        // Debugging: Log the form data to verify all fields
        console.log("Form Data:", formData);

        try {
            const response = await fetch('http://localhost:4000/signup', {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData), // Send formData as JSON
            });

            const responseData = await response.json();

            // Check if registration is successful
            if (responseData.success) {
                localStorage.setItem("auth-token", responseData.token);
                window.location.replace("/"); // Redirect to homepage on success
            } else {
                alert("Registration failed: " + responseData.errors); // Show error message
            }
        } catch (error) {
            console.error('Error during registration:', error);
        }
    };

    return (
        <div className="flex h-screen">
            {/* Left Section with Image */}
            <div className="flex-1 bg-gray-100">
                <img src={cover} alt='cover' className="object-cover w-full h-full" />
            </div>

            {/* Right Section with Registration Form */}
            <div className="flex items-center justify-center flex-1 bg-white">
                <div className="flex flex-col items-center justify-center flex-1 bg-white">
                    <h2 className="mb-20 mt-[-100px] text-4xl font-bold text-center text-loginColor font-istockWeb">SignUp</h2>
                    <div className="py-4 mt-[-60px] mb-2 text-xs text-loginColor">
                        <p>Create your account in seconds</p>
                    </div>

                    {/* Registration Form */}
                    <form onSubmit={handleSubmit} className='flex flex-col items-center'>
                        
                        {/* Username Input */}
                        <div className='relative mb-4 text-sm'>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Username"
                                value={formData.name}
                                onChange={changeHandler} // Update state on change
                                className="w-full px-8 py-2 border rounded"
                                required // Ensure this field is required
                            />
                        </div>

                        {/* Country Input */}
                        <div className='relative mb-4 text-sm'>
                            <input
                                type="text"
                                id="country"
                                name="country"
                                placeholder="Country"
                                value={formData.country}
                                onChange={changeHandler}
                                className="w-full px-8 py-2 border rounded"
                                required // Ensure this field is required
                            />
                        </div>

                        {/* Email Input */}
                        <div className='relative mb-4 text-sm'>
                            <input
                                type='email'
                                id='email'
                                name='email'
                                placeholder='Email Address'
                                value={formData.email}
                                onChange={changeHandler}
                                className="w-full px-8 py-2 border rounded"
                                required // Ensure this field is required
                            />
                        </div>

                        {/* Password Input */}
                        <div className='relative mb-4 text-sm'>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Create Password"
                                value={formData.password}
                                onChange={changeHandler}
                                className="w-full px-8 py-2 border rounded"
                                required // Ensure this field is required
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full px-4 py-2 mt-5 mb-2 text-white rounded font-istockWeb bg-logingbutton hover:bg-black"
                        >
                            Create an account
                        </button>
                    </form>

                    {/* Already a Member? */}
                    <div className="flex items-center justify-between mt-3 text-xs text-NavBlue">
                        <p className="mr-2">Already a member?</p>
                        <Link to="/login">
                            <button
                                className="px-5 py-2 text-sm duration-300 bg-white border rounded-xl hover:scale-110"
                                onClick={() => setState("Login")}
                            >
                                Login
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
