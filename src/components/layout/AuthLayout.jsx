
import React from 'react';
import pic2 from '../../assets/images/pic2.png'; // Adjust the path as necessary
const AuthLayout = ({ children }) => {
  return (
    <div className="flex h-screen w-screen">
      {/* Left Side: Form Section */}
      <div className="flex items-center justify-center w-full md:w-2/5 px-10 bg-rose-100">
      
        <div className="w-full max-w-md">
          <img src="/group 2.svg" className='h-20' />
          <h1 className="text-3xl font-bold text-emerald-900 mb-10 font-mono ">
            Trail   
          </h1>
          {children}
        </div>
      </div>

      {/* Right Side: Background Image */}
      <div className="hidden md:block w-3/5 h-screen relative overflow-hidden">
        <div className="w-48 h-40 rounded bg-yellow-400 absolute -top-7 -left-7 transform rotate-45"></div>
        <div
          className="absolute inset-0 bg-contain bg-center animation-background "
          style={{
            backgroundImage: `url(${pic2})`, // Replace with the image path
          }}
        ></div>

        </div>
    </div>
  );
};

export default AuthLayout;
