import react, { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import Navbar from './Navbar';
import Sidemenu from './SideMenu';


const DashboardLayout = ({children, activeMenu}) => {
    const {user} = useContext(UserContext); // Import the user context to get user data
    return (
        <div classname ="">
            <Navbar activeMenu={activeMenu} />

            {user && (
                <div className="flex">
                <div className="max-[1080px]:hidden">
                    <Sidemenu activeMenu={activeMenu} />
                </div>

                <div classname="grow mx-0">{children}</div>
                </div>
            )}
            </div>

    );
};
export default DashboardLayout;
