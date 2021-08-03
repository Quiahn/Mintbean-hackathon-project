import React from 'react'
import LinkedIn from '../icons/linkedIn'
import GitHub from '../icons/gitHub'
import Twitter from '../icons/twitter'
import q from '../img/q.jpg'
import s from '../img/sard.jpg'
export default function About() {
    return (
        <div className="w-full h-full bg-yellow-600 ">
            <p className="text-center text-white text-6xl my-20">About us</p>
            <div>
                <div className="max-w-5xl mx-auto flex flex-row flex-wrap my-10">
                    <div className="m-auto my-4">
                        <div className="flex flex-col bg-gray-200 max-w-sm shadow-md py-8 px-10 md:px-8 rounded-md">
                            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                                <img className="rounded-full border-4 border-gray-300 h-24 w-24 mx-auto" src={q} alt="Quiahn Ballou" />
                                <div className="flex flex-col text-center md:text-left">
                                    <div className="font-medium text-lg text-gray-800">Quiahn Ballou</div>
                                    <div className="text-gray-500 mb-3 whitespace-nowrap">Fullstack Web Developer</div>
                                    <div className="flex flex-row gap-4 text-gray-800 my-auto text-2xl mx-auto md:mx-0">
                                        <a className="hover:cursor-pointer hover:text-blue-500" href="https://www.linkedin.com/in/quiahn-ballou/"><LinkedIn></LinkedIn></a>
                                        <a className="hover:cursor-pointer hover:text-blue-500" href="https://github.com/Quiahn"><GitHub></GitHub></a>
                                        <a className="hover:cursor-pointer hover:text-blue-500" href="https://twitter.com/CodingWithQui"><Twitter></Twitter></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="m-auto my-4">
                        <div className="flex flex-col bg-gray-200 max-w-sm shadow-md py-8 px-10 md:px-8 rounded-md">
                            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                                <img className="rounded-full border-4 border-gray-300 h-24 w-24 mx-auto" src={s} alt="Quiahn Ballou" />
                                <div className="flex flex-col text-center md:text-left">
                                    <div className="font-medium text-lg text-gray-800">Sardorbek Omonkulov</div>
                                    <div className="text-gray-500 mb-3 whitespace-nowrap">Fullstack Web Developer</div>
                                    <div className="flex flex-row gap-4 text-gray-800 my-auto text-2xl mx-auto md:mx-0">
                                        <a className="hover:cursor-pointer hover:text-blue-500" href="https://www.linkedin.com/in/sardorbek-omonkulov-3881aa168/"><LinkedIn></LinkedIn></a>
                                        <a className="hover:cursor-pointer hover:text-blue-500" href="https://github.com/omonkulov"><GitHub></GitHub></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <p className="text-center text-white text-2xl my-20">well, that is about it 🤷</p>

        </div>
    )
}
