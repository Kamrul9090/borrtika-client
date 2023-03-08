import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="flex items-center overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap bg-gray-100 dark:bg-green-800 dark:text-gray-100 max-w-full  border-b-2 border-green-900 mt-24">
            <Link to="/home"><li className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg dark:border-gray-400 dark:text-gray-50 w-20">Home</li></Link>
            <Link><li className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg dark:border-gray-400 dark:text-gray-50">About Us</li></Link>
            <Link><li className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg dark:border-gray-400 dark:text-gray-50">Donate Us</li></Link>
            <Link><li className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg dark:border-gray-400 dark:text-gray-50">Contact Us</li></Link>
            <Link to='/dashboard'><li className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg dark:border-gray-400 dark:text-gray-50">Dashboard</li></Link>
            {/* <Link to='/add_services'><li className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg dark:border-gray-400 dark:text-gray-50">Add Services</li></Link> */}
        </div>
    );
};

export default Header;