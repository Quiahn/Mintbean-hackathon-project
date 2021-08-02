import React from 'react'
import { NavLink } from "react-router-dom";
import { useState, useContext, useEffect } from 'react';
import logo from './../img/card-wars-logo-sm.png'
import { UserContext } from "./UserContext";
import Cookies from 'universal-cookie';

const cookies = new Cookies();


export default function Navbar() {
    const [active, setActive] = useState(false);
    const { userDataGlobal, setUserDataGlobal } = useContext(UserContext)

    console.log(userDataGlobal);
    const logOut = () => {
        cookies.remove("token")
        setUserDataGlobal({ loggedIn: false, data: null })
    }
    const handleClick = () => {
        setActive(!active);
    };

    useEffect(() => {
        if (cookies.get("token") !== null && cookies.get("token") !== undefined) {
            console.log("GOOODD")
            setUserDataGlobal({ loggedIn: true, data: null })
        }
        // eslint-disable-next-line
    }, [])

    const notLoggedIn = () => {
        return (
            <>
                <NavLink to={`/signin`} activeClassName="bg-indigo-900" onClick={handleClick}>
                    <div className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-indigo-900 hover:text-white'>
                        <p>Sign In</p>
                    </div>
                </NavLink>

                <NavLink to={`/signup`} activeClassName="bg-indigo-900" onClick={handleClick}>
                    <div className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-indigo-900 hover:text-white'>
                        <p>Create Account</p>
                    </div>
                </NavLink>
            </>
        )
    }

    const loggedIn = () => {
        return (
            <>
                <NavLink to={`/game`} className="" replace onClick={() => { handleClick(); }}>
                    <div className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-indigo-900 hover:text-white'>
                        <p>Dashboard</p>
                    </div>
                </NavLink>
                <NavLink to={`/`} className="" replace onClick={() => { handleClick(); logOut() }}>
                    <div className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-indigo-900 hover:text-white'>
                        <p>Log Out</p>
                    </div>
                </NavLink>
            </>
        )
    }

    return (
        <nav className='sticky z-50 top-0 flex items-center flex-wrap bg-yellow-700 p-3'>

            <div className='inline-flex items-center mr-4'>
                <img src={logo} alt="Card Wars Logo" className="object-contain h-7 lg:h-10 w-full" />
            </div>
            <button className=' inline-flex p-1 hover:bg-indigo-900 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
                onClick={handleClick}
            >
                <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M4 6h16M4 12h16M4 18h16'
                    />
                </svg>
            </button>

            <div className={`${active ? '' : 'hidden'}   w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
                <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-center  flex flex-col lg:h-auto'>
                    <NavLink to={`/`} exact activeClassName="bg-indigo-900" onClick={handleClick}>
                        <div className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-indigo-900 hover:text-white '>
                            <p>Home</p>
                        </div>
                    </NavLink>
                    <NavLink to={`/about`} activeClassName="bg-indigo-900" onClick={handleClick}>
                        <div className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-indigo-900 hover:text-white'>
                            <p>About us</p>
                        </div>
                    </NavLink>
                    {userDataGlobal.loggedIn ? loggedIn() : notLoggedIn()}

                </div>
            </div>
        </nav>

    )
}
