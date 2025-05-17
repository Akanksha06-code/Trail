import React, { useState } from 'react';
import {HiOutlineMenu, HiOutlineX} from 'react-icons/hi';
import Sidemenu from './SideMenu';

const Navbar = ({activeMenu}) => {
    const[openSideMenu, setOpenSideMenu] = useState(false);
    return(
        <div className="flex gap-5 bg-green-300 border-b border-gray-200/50 backdrop-blur-[2px] py-4 px-7 sticky top-0 z-20">  
            <button
            className="block text-black" //for hiding use hidden md:block
            onClick={() => {
                setOpenSideMenu(!openSideMenu);
            }}
            >
                {openSideMenu ? (
                    <HiOutlineX className="text-2xl" />
                ) : (
                    <HiOutlineMenu className="text-2xl" />
                )}
            </button>
            <h2 className="text-2xl font-bold text-gray-800">Expense tracker</h2>
            {openSideMenu &&(
                <div className="fixed top-[61px] -ml-4">
                    <Sidemenu activeMenu={activeMenu} />
                </div>  
            )}
        </div>
    )
}
export default Navbar;