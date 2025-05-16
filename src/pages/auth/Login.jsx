import React, { useState, useContext } from 'react';
import AuthLayout from '../../components/layout/AuthLayout';
import { useNavigate } from 'react-router-dom';
import { validateEmail } from '../../utils/helper'; // Import the email validation function
import Input from '../../components/Inputs/input' // Import the Input component
import { API_PATHS } from '../../utils/apiPath'; // Import the API paths
import axiosInstance from '../../utils/axiosInstance'; // Import the axios instance
import { UserContext } from '../../context/userContext'; // Import the user context
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const {updateUser} = useContext(UserContext); // Import the user context to update user data

  const navigate = useNavigate();

  // Handle login form submission

  const handleLogin = async (e) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if(!password){
      setError("Please enter your password.");
      return;
    }
    setError(""); // Clear any previous error
    
    //login API call
     try{
      console.log("Login Path:",API_PATHS.AUTH.LOGIN);
      const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
       email,
       password,
    });
   
      const {token,user} = response.data;

      if(token){
        localStorage.setItem("token", token); // Store the token in local storage
        updateUser(user); // Update the user context with the user data
        navigate('/dashboard'); // Redirect to dashboard after successful login
      }
    } catch (error) {
      if(error.response && error.response.data.message ) {
        setError(error.response.data.message); // Set error message from server response  
      }else{
        setError("Something went wrong. Please try again later."); // Fallback error message

      }
    }
  };

  return (
    <AuthLayout>
      <h2 className="text-3xl font-extrabold text-green-900 mb-2">Welcome Back 👋</h2>
      <p className="text-black mb-6 text-sm">Please log in to your account to continue.</p>

      {error && <div className="text-red-500 mb-4 text-sm">{error}</div>}

      <form onSubmit={handleLogin} className="space-y-5">
        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <Input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent shadow-sm"
            required
          />
        </div>

        {/* Password Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <Input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent shadow-sm"
            required
          />
        </div>
        {error && <div className="text-red-500 mb-4 text-sm">{error}</div>}
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-2xl shadow-md transition-all duration-300"
        >
          Login   
        </button>

        {/* Optional: Extra Link */}
        <p className="text-sm text-center text-black mt-3">
          Don't have an account?{" "}
          <span
            onClick={() => navigate('/signup')}
            className="text-yellow-500 hover:underline cursor-pointer"
          >
            Sign up
          </span>
        </p>
      </form>
    </AuthLayout>
  );
};

export default Login;
