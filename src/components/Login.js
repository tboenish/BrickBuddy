import React, { useState } from 'react'
const Login = () =>
{

    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => 
    {
        event.preventDefault();
        //Add logic here
    };
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-800
        ">
          <form
            onSubmit={handleSubmit}
            className="bg-gray-500 p-8 rounded-lg shadow-md max-w-md w-full"
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
    
            {/* Email Input Field */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-300"
                required
              />
            </div>
    
            {/* Password Input Field */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-300"
                required
              />
            </div>
    
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300"
            >
              Login
            </button>
          </form>
        </div>
      );  
};
export default Login;