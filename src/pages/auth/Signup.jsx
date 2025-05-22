
import React, { useState } from 'react';
import AuthLayout from '../../components/layout/AuthLayout';
import { useNavigate } from 'react-router-dom';
import { validateEmail } from '../../utils/helper';
import Input from '../../components/Inputs/input';
import ProfilePhotoSelector from '../../components/Inputs/ProfilePhotoSelector'; 
import { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import { API_PATHS } from '../../utils/apiPath';
import axiosInstance from '../../utils/axiosInstance'; 
import uploadImage from '../../utils/uploadImage'

const Signup = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); 

  const {updateUser} = useContext(UserContext); // Import the user context to update user data
  const navigate = useNavigate();

//handle Signup Form Submit
  const handleSignup = async (e) => {
    e.preventDefault();

    let profileImageUrl = "";

    if(!fullName) {
      setError("Please enter your full name.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!password) {
      setError("Please enter your password.");
      return;
    }

    setError("");
    // Signup API call
    try{

      //upload image if present
      if(profilePic){
        const imgUploadRes = await uploadImage(profilePic);
        console.log("Image upload response:", imgUploadRes); //new added
        profileImageUrl = imgUploadRes.imageUrl || imgUploadRes.imageURL || "";
      }


      const response = await axiosInstance.post(API_PATHS.AUTH.SIGNUP, {
        fullName,
        email,
        password,
        profileImageUrl
      });
      const {token,user}= response.data;
      if(token){
        localStorage.setItem("token", token); // Store the token in local storage
        updateUser(user); // Update the user context with the user data
        navigate('/dashboard'); // Redirect to dashboard after successful signup
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
      <div className="w-full max-w-2xl mx-auto mt-10 p-6 bg-green-200 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-center text-yellow-500 mb-2">Create an Account</h2>
        <p className="text-center text-gray-600 mb-6">Please fill in the details below</p>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSignup} className="space-y-6">

          <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} /> 
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              label="Full Name"
              placeholder="Enter your full name"
              type="text"
              className="rounded-xl"
            />
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email Address"
              placeholder="Enter your email"
              type="email"
              className="rounded-xl"
            />
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
              placeholder="Enter your password"
              type="password"
              className="rounded-xl"
            />
          </div>

          <div>
            {error && <div className="text-red-500 mb-4 text-sm">{error}</div>}
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-2xl shadow-md transition-all duration-300"
            >
              Signup
            </button>
          </div>

          <p className="text-sm text-center text-black mt-3">
            Already have an account?{" "}
            <span
              onClick={() => navigate('/login')}
              className="text-yellow-500 hover:underline cursor-pointer"
            >
              login
            </span>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Signup;
