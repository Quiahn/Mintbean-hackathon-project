import React, { useState } from 'react';
import axios from 'axios'
import { useHistory } from 'react-router';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default function SignIn() {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [status, setStatus] = useState("")

    let history = useHistory();

    const onButtonClick = (event) => {
        setStatus("pending")
        if (!username || !password) return
        axios.post(process.env.REACT_APP_SERVER_URI + "/api/user/login", { username, password })
            .then((res) => {
                const token = res.headers['auth-token']
                console.log("Log In Request: ", res.data)
                setStatus("success")
                cookies.set("token", token)
                history.replace("/game")
            })
            .catch(error => {
                console.log(error.response);
                if (error.response)
                    setStatus(error.response.data)
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

                                <button className="disabled:bg-indigo-100 shadow-md bg-indigo-500 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" id="sign-up-btn" type="button" onClick={onButtonClick}>
                                    Sign In
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <p className="text-center text-indigo-400 my-6 text-xs">{status}</p>
            </div>
        </div>
    )
}
