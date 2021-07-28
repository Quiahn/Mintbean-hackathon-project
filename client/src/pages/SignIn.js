import React from 'react'

export default function SignIn () {
    return (
        <div className="container flex flex-col h-screen mx-auto">
            <div className="m-auto">
                <div className="sm:shadow p-10 sm:border-2 border-opacity-50">
                    <p className="text-center mb-6 text-3xl">Log In</p>
                    <form className="max-w-md m-0 p-0" id="user-form">
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3 ">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-username text-xs">
                                    Username
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input className="shadow bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-300" id="inline-username" type="text" placeholder="username"  required />
                            </div>
                        </div>

                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password  text-xs">
                                    Password
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input className="shadow bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-300" id="inline-password" type="password" placeholder="**********"  pattern="^\S{6,}$" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required />
                            </div>
                        </div>

                        <div className="md:flex md:items-center">
                            <div className="md:w-1/3"></div>
                            <div className="md:w-2/3">
                                <button className="disabled:bg-indigo-100 shadow-md bg-indigo-500 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" id="sign-up-btn" type="submit">
                                    Sign In
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
