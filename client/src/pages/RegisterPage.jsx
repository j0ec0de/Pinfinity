import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'

const RegisterPage = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(password != confirmPassword) {
            alert("Passwords do not match!")
            return
        }

        try{
            const res = await fetch("http://localhost:3000/api/auth/register",{ 
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, email, password, confirmPassword })
            })

            const data = await res.json()

            if(!res.ok) {
                alert(data.message)
            } else {
                toast.success(data.message);
                setTimeout(()=> {
                    navigate('/login');
                }, 1500);
            }

        } catch (error) {
            alert("Something went wrong")
            console.error(error)
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


        <div className='min-h-screen flex items-center justify-center px-4'>
            <div className='w-full max-w-md bg-white rounded-xl shadow-xl p-8 space-y-6 border border-gray-300'>
                <h2 className='text-2xl font-bold text-gray-800 text-left'>Welcome to <span className='text-purple-700'> Pinfinity </span> </h2>

                <form className='space-y-4' onSubmit={handleSubmit}>

                    <div>
                        <label className='block text-sm font-medium text-gray-600 mb-1'>Name</label>
                        <input 
                            type='text'
                            value={name}
                            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400'
                            placeholder='name'
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label className='block text-sm font-medium text-gray-600 mb-1'>Email</label>
                        <input
                            type='email'
                            value={email}
                            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400'
                            placeholder='you@example.com'
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label className='block text-sm font-medium text-gray-600 mb-1'>Password</label>
                        <input 
                            type='password'
                            value={password}
                            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400'
                            placeholder='••••••••'
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label className='block text-sm font-medium text-gray-600 mb-1'>Confirm Password</label>
                        <input 
                            type='password'
                            value={confirmPassword}
                            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400'
                            placeholder='••••••••'
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        type='submit'
                        className='w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-800 transition duration-200'
                    >
                        Sign up
                    </button>
                </form>

                <p className='text-sm text-center text-gray-500'>
                    Already have an account? {' '}
                    <Link to='/login'>
                        <a href='/login' className='text-indigo-500 hover:underline'>
                            Sign in
                        </a>
                    </Link>
                </p>
            </div>
        </div> 
    </>
  )
}

export default RegisterPage