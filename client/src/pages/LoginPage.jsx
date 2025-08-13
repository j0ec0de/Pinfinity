import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch("http://localhost:3000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-type" : "application/json"
                },
                body : JSON.stringify({ email, password })
            })

            const data = await res.json();

            if(!res.ok) {
                toast.error(data.message);
            } else {
                const message = "Logged in !!";
                toast.success(message);
            }


        } catch (error) {
            alert("Something went wrong!");
            console.log(error);
        }
    }


  return (
    <>
    <Toaster
            position="bottom-center"
            reverseOrder = {false}
    />
    <Link to="/" >
    <button
    type='submit'
    className='bg-purple-500 rounded-lg p-2 ml-5 mt-5 text-white'
    >
        Back
    </button>
    </Link>


    <div className="min-h-screen flex items-center justify-center  px-4">
        <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8 space-y-6 border border-gray-300">
            <h2 className="text-2xl font-bold text-gray-800 text-left">Welcome to <span className="text-purple-700">Pinfinity</span></h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
                <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="you@example.com"
                onChange={(e) => setEmail(e.target.value)}
                required
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Password</label>
                <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="••••••••"
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            </div>

            <div className="flex justify-between items-center">
                <label className="flex items-center text-sm text-gray-600">
                <input type="checkbox" className="mr-2" />
                Remember me
                </label>
                <a href="#" className="text-sm text-indigo-500 hover:underline">
                Forgot password?
                </a>
            </div>

            <button
                type="submit"
                className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-800 transition duration-200"
            >
                Sign In
            </button>
            </form>

            <p className="text-sm text-center text-gray-500">
            Don’t have an account?{' '}
            <Link to="/register">
                <a href="/register" className="text-indigo-500 hover:underline">
                    Sign up
                </a>
            </Link>
            </p>
        </div>
    </div>
    </>
  )
}

export default LoginPage;