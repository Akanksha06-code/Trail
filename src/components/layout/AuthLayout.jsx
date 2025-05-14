
// import React from 'react';
// import pic from "../../assets/images/pic.jpg";
// const AuthLayout = ({ children }) => {
//   return <div> 
//     <div className ="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12">
//       <h1 className ="text-2xl font-bold text-yellow-400">Budget & Subscription Tracker</h1>
//               {children}
//       </div>
//       <img src={pic} alt="pic"className = "hidden md:block h-screen" />
//     </div>
// };

// export default AuthLayout;
import React from 'react';
import pic2 from '../../assets/images/pic2.png'; // Adjust the path as necessary
const AuthLayout = ({ children }) => {
  return (
    <div className="flex h-screen w-screen">
      {/* Left Side: Form Section */}
      <div className="flex items-center justify-center w-full md:w-2/5 px-10 bg-white">
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-bold text-yellow-500 mb-6">
            Budget & Subscription Tracker
          </h1>
          {children}
        </div>
      </div>

      {/* Right Side: Background Image */}
      <div className="hidden md:block w-3/5 h-screen relative overflow-hidden">
        <div className="w-48 h-40 rounded bg-yellow-400 absolute -top-7 -left-7 transform rotate-45"></div>
        <div
          className="absolute inset-0 bg-cover bg-center animation-background"
          style={{
            backgroundImage: `url(${pic2})`, // Replace with the image path
          }}
        ></div>

        </div>
    </div>
  );
};

export default AuthLayout;
