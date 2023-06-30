import { GitHub, Google } from '@mui/icons-material';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { getcookie, validateOauthUser, validateUser } from '../api/validateUser';

const LoginPage = () => {
    const router = useRouter()
    const API_BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL;
    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleLogin = (e) => {
        e.preventDefault()
        validateUser(user, router)
    }

    const handleOauth2 = async (provider) => {
        const oauthUrl = `${API_BASE_URL}/oauth2/authorization/${provider}`
        router.push(oauthUrl)
        getcookie(user)

    }

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="SimpSite"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleLogin}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    value={user.email}
                                    onChange={handleChange}
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password" value={user.password}
                                    onChange={handleChange}
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                        <div className="flex items-center">
                            <div className="flex-grow border-t border-gray-400"></div>
                            <div className="mx-4 text-gray-400 text-sm">Or Other Social Media</div>
                            <div className="flex-grow border-t border-gray-400"></div>
                        </div>
                        <div>
                            <button className='flex justify-center w-full hover:bg-gray-300 hover:text-white  border-2 border-spacing-2 border-gray-200 py-1.5 px-3 rounded-lg'
                                onClick={() => handleOauth2('github')}>
                                <img src="/github-mark.png" className='w-6 mx-3' />Login with Github</button>
                        </div>
                        <div>
                            <button className='flex justify-center w-full hover:bg-gray-300 hover:text-white border-2 border-spacing-2 border-gray-200 p-2 rounded-lg'
                                onClick={() => handleOauth2('google')}>
                                <img src="/google-mark.png" className='w-6 mx-3' />
                                <span>Login with Google</span>
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?{' '}
                        <a href="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Start a 14 day free trial
                        </a>
                    </p>
                </div>
            </div>

        </>
    )
}

export default LoginPage