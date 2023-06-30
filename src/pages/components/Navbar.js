import React, { useEffect, useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';
import { validateUser } from '../api/validateUser';
import registerUser from '../api/registerUser';
import { useRouter } from 'next/router';

const Navbar = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [username, setUsername] = useState('')

    const router = useRouter()

    useEffect(() => {
        const userDetails = window.sessionStorage.getItem("userdetails")
        const user = window.sessionStorage.getItem("user")
        console.log(user);
        console.log(userDetails);
        const isLoggedIn = (userDetails !== null && userDetails !== undefined) || user !== null;
        console.log(isLoggedIn);
        setIsAuthenticated(isLoggedIn)

        if (isLoggedIn) {
            const parsedUserDetails = JSON.parse(userDetails || "{}");
            const username = parsedUserDetails.username || user;
            console.log("username:", username);
            setUsername(username);
        }
    }, [])

    const handleLogout = () => {
        window.sessionStorage.removeItem('userdetails')
        setIsAuthenticated(false)
        router.push('/login')
    }



    return (
        <div className='fixed top-0 w-full bg-white z-50'>
            <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
                <h1 className='w-1/3 text-3xl font-bold text-indigo-600'>SimpSite</h1>
                <ul className='flex w-1/3 ml-32'>
                    <a className='p-6' href='/'>Home</a>
                    <a className='p-6' href='/price'>Price</a>
                    <a className='p-6 mr-8' href='/about'>About</a>
                </ul>
                <div className='flex flex-row w-1/3 justify-end items-center' >
                    {isAuthenticated
                        ?
                        (<div className='flex items-center space-x-8' >
                            <a href="#" className="text-gray-700 hover:bg-gray-100" >
                                <AccountCircleIcon className='mr-2 item' />Hello, {username}
                            </a>
                            <a href="/profile" className="text-gray-700 hover:bg-gray-100" >
                                Profile
                            </a>
                            <a href="#" className="text-gray-400 hover:bg-gray-100" onClick={handleLogout}>
                                Sign out
                            </a>
                        </div>)
                        : (
                            <div className='flex items-center space-x-8' >
                                <a href='/login'>Login</a>
                                <a href='/register' className='text-indigo-600' >Sign Up Free</a>
                            </div>)
                    }
                </div>

            </div>
        </div>
    )
}

export default Navbar