import React, { useState } from 'react';
import CheckMarkIcon from '../icons/checkMark'
import XMarkIcon from '../icons/xMark'
import { onSignUp } from '../misc/api';

export default function SignUp () {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const [validate, setValidate] = useState({
        "length": true,
        "contains_num": true,
        "contains_let": true,
        "matches": true,
        "everything_valid": true,
    })

    const onButtonClick = (event) => {
        event.preventDefault()
        console.log("Sing Up Request Button Clicked")
        onSignUp(username, password)
    }

    const onPasswordFieldChange = (event) => {

        const firstPassword = document.getElementById('inline-password').value
        const secondPassword = document.getElementById('inline-password-check').value
        if (secondPassword === firstPassword) {
            document.getElementById('sign-up-btn').disabled = false
            event.target.setCustomValidity("")
            event.target.reportValidity();

        } else {
            document.getElementById('sign-up-btn').disabled = true
            event.target.setCustomValidity("Passwords Don't Match")
            event.target.reportValidity();
        }
    }

    const markIcon = (isValidated) => {
        return isValidated ? <CheckMarkIcon className={"w-1/4 h-4 fill-current text-green-500"} /> : <XMarkIcon className={"w-1/4 h-4 fill-current text-red-500"} />
    }

    return (
        <div className="container flex flex-col h-screen mx-auto">
            <div className="m-auto">
                
                <div className="sm:shadow p-10 sm:border-2 border-opacity-50">
                    <p className="text-center mb-8 text-3xl">Create Account</p>
                    <form className="max-w-md m-0 p-0" id="user-form">
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3 ">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-username text-xs">
                                    Username
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input className="shadow bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-300" id="inline-username" type="text" placeholder="username" onChange={(event) => setUsername(event.target.value)} required />
                            </div>
                        </div>

                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password  text-xs">
                                    Password
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input className="shadow bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-300" id="inline-password" type="password" placeholder="**********" onChange={(event) => { setPassword(event.target.value) }} pattern="^\S{6,}$" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required />
                            </div>
                        </div>

                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password-check">
                                    Password Confirm
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input className="shadow bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-300" id="inline-password-check" type="password" placeholder="**********" required onChange={(event) => console.log(event.target.value)} />
                            </div>

                        </div>


                        <div className="md:flex md:items-center">
                            <div className="md:w-1/3"></div>
                            <div className="md:w-2/3">
                                <button disabled={!validate.everything_valid} className="disabled:bg-indigo-100 shadow-md bg-indigo-500 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" id="sign-up-btn" type="submit" onClick={onButtonClick}>
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className={"sm:shadow mt-4 p-10 sm:border-2 border-opacity-50 " + ((validate.everything_valid) ? "bg-green-50" : "bg-red-50")}>
                    <p className="text-center text-xl">Password Requirements</p>
                    <div className="flex  flex-col mt-6 content-center">
                        <div className="flex items-center my-2">
                            {markIcon(validate.length)}
                            <p className="w-3/4">Contains more than 7 characters</p>
                        </div>
                        <div className="flex items-center my-2">
                            {markIcon(validate.contains_num)}
                            <p className="w-3/4">Contain atlest 1 number</p>
                        </div>
                        <div className="flex items-center my-2">
                            {markIcon(validate.contains_let)}
                            <p className="w-3/4">Contains Letters</p>
                        </div>
                        <div className="flex items-center my-2">
                            {markIcon(validate.matches)}
                            <p className="w-3/4">Passwords should match</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}