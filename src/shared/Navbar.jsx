import React, { useContext, useState } from 'react';
import logo from '../assets/logo/borrtika_logo.png'
import Trap from '../components/Trap/Trap';
import { HiViewList, HiX } from "react-icons/hi";
import { AuthContext } from '../context/AuthProvider';
import SwitchButton from '../components/Switch/SwitchButton';
import { Button } from '../components/Button/Button';
import { FaCartPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { ImUser } from 'react-icons/im';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const { toggleTheme, theme, user, logOut } = useContext(AuthContext);

    const handlelogOut = () => {
        logOut()
            .then(() => { })
            .catch((e) => console.log(e))
    }
    return (
        <header className="p-4 bg-gray-200 dark:text-gray-100 fixed w-full z-40">
            <div className="container items-center flex justify-around h-16 mx-auto relative">
                <a rel="noopener noreferrer" href="#home" aria-label="Back to homepage" className="flex items-center p-2">
                    <Link to='/home'>
                        <img src={logo} className="w-14 lg:w-20 rounded-t-full bg-green-800" alt="" srcset="" />
                    </Link>
                </a>
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <button type="submit" title="Search" className="p-1 focus:outline-none focus:ring">
                            <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 dark:text-gray-100">
                                <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                            </svg>
                        </button>
                    </span>
                    <input type="search" name="Search" placeholder="Search..." className=" w-32 lg:w-80 py-2 px-8 lg:px-12 text-sm rounded-md sm:w-auto focus:outline dark:bg-green-800 dark:text-gray-100 focus:dark:bg-gray-900" />
                </div>
                <div className={`items-center flex-shrink-0 hidden lg:flex space-x-5`}>
                    {
                        user?.uid ?
                            <Link to='/login'><button className='bg-green-900 p-2 rounded-md hover:bg-green-400' onClick={handlelogOut}>Log out</button></Link>
                            :
                            <Link to='/login'><Button>Login</Button></Link>
                    }
                    <Trap>
                        <Button>
                            <FaCartPlus className='w-14 h-6'></FaCartPlus>
                        </Button>
                    </Trap>
                    <SwitchButton toggleTheme={toggleTheme} theme={theme}></SwitchButton>
                    {
                        user?.photoURL ?
                            <img alt="" className="w-10 h-10 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800" src={user?.photoURL} />
                            :
                            <ImUser className='w-10 h-10'></ImUser>
                    }
                </div>
                <div className={`flex-shrink-0 lg:hidden ${isOpen ? "hidden" : "block"} space-y-5 w-40 absolute left-48 top-20 bg-gray-300 text-center py-3 z-40`}>
                    {
                        user?.uid ?
                            <Link to='/login'><Button onClick={handlelogOut}>Log out</Button></Link>
                            :
                            <Link to='/login'><Button>Login</Button></Link>
                    }
                    <Trap>
                        <Button>
                            <FaCartPlus className='w-14 h-6'></FaCartPlus>
                        </Button>
                    </Trap>
                    <SwitchButton toggleTheme={toggleTheme} theme={theme}></SwitchButton>
                </div>
                <button onClick={() => setIsOpen(!isOpen)} className="p-4 lg:hidden">
                    {
                        isOpen ?
                            <HiViewList></HiViewList>
                            :
                            <HiX></HiX>
                    }
                </button>
            </div>
        </header>
    );
};

export default Navbar;