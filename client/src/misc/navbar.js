import React from 'react'
import { Link, useRouteMatch } from "react-router-dom";

export default function Navbar() {

      let match = useRouteMatch();
        console.log(match)
      return (
      
        <nav className='flex items-center flex-wrap bg-indigo-900 p-3 '>
        
          <div className='inline-flex items-center p-2 mr-4 '>
            <span className='text-sm sm:text-xl text-white font-bold uppercase tracking-wide'>
              Apex-Legends
            </span>
            
          </div>
          <button className=' inline-flex p-1 hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'>
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

        <div className='hidden w-full lg:inline-flex lg:flex-grow lg:w-auto'>
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
          <Link to={`${match.url}/`} className="">
              <div className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white '>
                Home
              </div>
              </Link>
              <Link to={`${match.url}/about`} className="">
              <div className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                About us
              </div>
              </Link>
  
              <Link to={`${match.url}/signup`} className="">
              <div className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                Log In
              </div>
              </Link>
            
              <Link to={`${match.url}/signin`} className="">
              <div className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                Log Out
              </div>
              </Link>
          
          </div>
        </div>
      </nav>

      )
}
