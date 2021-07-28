import React, { useState } from 'react';
import axios from 'axios'

export default function SignIn() {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()


    const onButtonClick = (event) => {
        event.preventDefault()
        if (!username || !password) return
        axios.post("http://localhost:3001/login-user", { username, password })
            .then((res) => {
                console.log("Log In Request: ", res.data)
            })

    }
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
                                <input className="shadow bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-300" id="inline-username" type="text" placeholder="username" autoComplete="username" required
                                    onChange={(event) => setUsername(event.target.value)} />
                            </div>
                        </div>

                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password  text-xs">
                                    Password
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input className="shadow bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-300" id="inline-password" type="password" placeholder="**********" pattern="^\S{6,}$" autoComplete="current-password" required onChange={(event) => setPassword(event.target.value)} />
                            </div>
                        </div>

                        <div className="md:flex md:items-center">
                            <div className="md:w-1/3"></div>
                            <div className="md:w-2/3">
                                <button className="disabled:bg-indigo-100 shadow-md bg-indigo-500 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" id="sign-up-btn" type="submit" onClick={onButtonClick}>
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
