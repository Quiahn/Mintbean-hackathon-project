import React, { useState, useEffect } from 'react';
import lgLogo from './../img/card-wars-logo-lg.png'
import loginThumn from '../img/login.png'
import stats from '../img/stats.png'
import Chat from '../img/chat.png'
import axios from 'axios';
import { Link } from "react-router-dom"

export default function Home() {
    const [leaderData, setLeaderData] = useState([])
    useEffect(() => {
        axios.get(process.env.REACT_APP_SERVER_URI + "/api/public/leaderboard/20")
            .then((res) => {
                setLeaderData(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const leaderBoardMap = leaderData.map((user, i) => {
        return (
            <tr key={i} className="text-left  divide-x-2 divide-yellow-500">
                <td className="px-4 py-3 ">{user.username}</td>
                <td className="px-4 py-3 ">{user.gamesPlayed}</td>
                <td className="px-4 py-3 ">{user.gamesWon}</td>
                <td className="px-4 py-3 ">{user.gamesLost}</td>
                <td className="px-4 py-3 ">{user.cardsDrawn}</td>
            </tr>

        )
    })

    return (
        <div className="bg-yellow-600 w-full">
            <div className="w-full h-screen flex bg-yellow-600">
                <img className="m-auto object-contain bg-yellow-600" src={lgLogo} alt="Logo" />
            </div>
            <div className="bg-yellow-600">
                <div className="text-center bg-yellow-600">
                    <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                        <span className="block text-gray-200 xl:inline">Create an account {"&"} </span>{' '}
                        <span className="block text-indigo-600 xl:inline">start playing</span>
                    </h1>
                    <div className="mt-5 sm:mt-8 sm:flex justify-center bg-yellow-600">
                        <div className="mx-10 sm:mx-10 rounded-md shadow ">
                            <Link to="/signup">
                                <button
                                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                                    Create Account
                                </button>
                            </Link>
                        </div>
                        <div className="mx-10 sm:mx-10 sm:mt-0 sm:ml-3 bg-yellow-600">
                            <Link to="/signin">
                                <button className="w-full  flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                                    Log In
                                </button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="text-4xl text-center text-white mt-20">Features</h1>
            <div className="max-w-screen-xl grid grid-cols-1 xl:grid-cols-3 mx-auto">
                <div className="p-4 w-96 flex flex-col justify-center mx-auto">
                    <div className="border-l-8 border-b-8 border-indigo-600">
                        <img className="object-cover h-72 w-full" src={loginThumn} alt="Login Snip" />
                    </div>
                    <p className='text-3xl text-center text-white p-4'>Accounts</p>
                    <p className='text-xl text-center text-white '>You can create accounts and save your progress!</p>
                </div>
                <div className="p-4 w-96 flex flex-col justify-center mx-auto">
                    <div className="border-l-8 border-b-8 border-indigo-600">
                        <img className="object-cover h-72 w-full" src={Chat} alt="Login Snip" />
                    </div>
                    <p className='text-3xl text-center text-white p-4'>Chat</p>
                    <p className='text-xl text-center text-white '>If you want to meat new people you can chat with anyone who is the game lobby!</p>
                </div>
                <div className="p-4 w-96 flex flex-col justify-center mx-auto">
                    <div className="border-l-8 border-b-8 border-indigo-600">
                        <img className="object-cover h-72 w-full" src={stats} alt="Login Snip" />
                    </div>
                    <p className='text-3xl text-center text-white p-4'>Statistics</p>
                    <p className='text-xl text-center text-white '>We will keep track of yours stats! If you are lucky enough you can be on the leaderboard!</p>
                </div>
            </div>


            <div className="w-full flex flex-col bg-yellow-600 overflow-x-hidden pt-40">
                <p className="text-4xl text-center text-white font-bold m-5">Leaderboard</p>
                <table className="rounded-t-lg m-5 w-5/6 mx-auto text-gray-50">
                    <tbody className="divide-y-2 divide-yellow-500">
                        <tr className="text-left border-b-4 border-yellow-400 divide-x-2 divide-yellow-500">
                            <th className="px-4 py-3 text-white">Username</th>
                            <th className="px-4 py-3 text-white">Games Played</th>
                            <th className="px-4 py-3 text-white">Games Won</th>
                            <th className="px-4 py-3 text-white">Games Lost</th>
                            <th className="px-4 py-3 text-white">Cards Drawn</th>
                        </tr>
                        {leaderBoardMap}
                    </tbody>
                </table>
            </div>

        </div>
    )
}
