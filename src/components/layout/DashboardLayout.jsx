import React, { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import Navbar from './Navbar';
import Sidemenu from './SideMenu';


const DashboardLayout = ({children, activeMenu}) => {
    const {user} = useContext(UserContext); // Import the user context to get user data
    return (
        <div className ="">
            <Navbar activeMenu={activeMenu} />

            {user && (
                <div className="flex">
               <div className="max-[1080px]:hidden">
                    <Sidemenu activeMenu={activeMenu} />
                </div>

                <div className="grow mx-5">{children}</div>
                </div>
            )}
            </div>

    );
};
export default DashboardLayout;
