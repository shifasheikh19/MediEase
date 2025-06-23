import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AppContext } from '../context/AppContext'; // if you store token globally here
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { backendUrl, setToken } = useContext(AppContext); // get backend URL and set token globally
    const navigate = useNavigate();

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        try {
            const { data } = await axios.post(backendUrl + '/api/user/register', {
                name,
                email,
                password
            });

            if (data.success) {
                toast.success("Registration Successful!");
                localStorage.setItem("token", data.token); // Save token in localStorage
                setToken(data.token); // Save token in context (if you use it)
                navigate('/'); // Redirect to homepage or dashboard
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Registration failed. Please try again.");
        }
    };

    return (
        <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
            <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg'>
                <p className='text-2xl font-semibold m-auto'>Create Account</p>

                <div className='w-full'>
                    <p>Name</p>
                    <input type="text" required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='border border-[#DADADA] rounded w-full p-2 mt-1' />
                </div>

                <div className='w-full'>
                    <p>Email</p>
                    <input type="email" required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='border border-[#DADADA] rounded w-full p-2 mt-1' />
                </div>

                <div className='w-full'>
                    <p>Password</p>
                    <input type="password" required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='border border-[#DADADA] rounded w-full p-2 mt-1' />
                </div>

                <button className='bg-primary text-white w-full py-2 rounded-md text-base'>Register</button>

                <p>Already have an account? 
                    <span onClick={() => navigate('/login')} 
                        className='text-primary underline cursor-pointer ml-1'>
                        Login
                    </span>
                </p>
            </div>
        </form>
    );
};

export default Register;
