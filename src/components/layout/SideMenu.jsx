import React, { useContext } from 'react';
import { SIDE_MENU_DATA } from '../../utils/data';
import { UserContext } from '../../context/userContext';
import { useNavigate } from 'react-router-dom';
import  CharAvatar  from "../Cards/CharAvatar";


const Sidemenu = ({ activemenu}) => {
  const { user, clearUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleClick = (route) => {
    
    if (route === 'logout') {
      handleLogout();
      return;
    }
    navigate(route);
  };

  const handleLogout = () => {
    localStorage.clear();
    clearUser();
    navigate('/login');
  };
  

  return (
   
    <div className="w-64 h-[calc(100vh-61px)] bg-white border-r border-black  p-5 top-[61px] z-10 mt-1 ">
      <div className="flex flex-col items-center justify-center gap-3 mb-26">
        {user?.profileImageUrl ? (
          <img
            src={user?.profileImageUrl || ''}
            alt="Profile"
            className="w-20 h-20 bg-yellow-500 rounded-full"
          />) :(
          <CharAvatar
              fullName={user?.fullName}
              width="w-20"
              height="h-20"
                style="text-xl"
            />
        )}
        <h4 className="text-yellow-600 font-medium leading-6">
          {user?.fullName || ''}
        </h4>
      </div>

      {SIDE_MENU_DATA.map((item, index) => {
        const isActive = activemenu === item.label;
        return (
          <button
            key={`menu_${index}`}
            className={`w-full flex items-center gap-3 text-[15px] py-3 px-5 rounded-lg mb-2 transition-all duration-200 ${
              isActive
                ? 'bg-yellow-700 text-green-900 font-semibold border-l-4 border-yellow-900'
                : 'hover:bg-yellow-200 text-gray-800'
            }`}
            onClick={() => handleClick(item.path)}
          >
            <item.icon className="text-2xl" />
            {item.label}
          </button>
        );
      })}
    </div>
  );
};

export default Sidemenu;
