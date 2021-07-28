import React, { useState, useEffect } from 'react';
import CheckMarkIcon from '../icons/checkMark'
import XMarkIcon from '../icons/xMark'
import axios from 'axios'

export default function SignUp() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState()
    const [passwordConfirm, setPasswordConfirm] = useState()
    const [everythingValid, setEverythingValid] = useState(false)
    const [validate, setValidate] = useState({
        "length": false,
        "contains_num": false,
        "contains_let": false,
        "matches": false,
        "username_filled": false
    })

    const onButtonClick = (event) => {
        event.preventDefault()
        console.log("Sing Up Request Button Clicked")
        axios.post("http://localhost:3001/create-user", { username, password })
            .then((res) => {
                console.log("Sing Up Request: ", res.data)
                this.props.history.push('/game')
            })

    }

    useEffect(() => {
        // If page changed or refresh in mids t of updating something AbortControl takes care of it
        const abortCtrl = new AbortController();

        // If username is empty
        if (username && username.length > 3) {
            setValidate(prevValidate => ({ ...prevValidate, username_filled: true }))
        } else {
            setValidate(prevValidate => ({ ...prevValidate, username_filled: false }))
        }

        // If both password inputs have the same value, use checkmark otherwise xmark
        if (password === passwordConfirm && password) {
            setValidate(prevValidate => ({ ...prevValidate, matches: true }))
        } else {
            setValidate(prevValidate => ({ ...prevValidate, matches: false }))
        }

        // If password is more than 8 chars
        if (password && password.length > 8) {
            setValidate(prevValidate => ({ ...prevValidate, length: true }))
        } else {
            setValidate(prevValidate => ({ ...prevValidate, length: false }))
        }

        // If password contains number
        if (password && (/\d/).test(password)) {
            setValidate(prevValidate => ({ ...prevValidate, contains_num: true }))
        } else {
            setValidate(prevValidate => ({ ...prevValidate, contains_num: false }))
        }

        // If password contains a letter
        if (password && (/\w/).test(password)) {
            setValidate(prevValidate => ({ ...prevValidate, contains_let: true }))
        } else {
            setValidate(prevValidate => ({ ...prevValidate, contains_let: false }))
        }

        // Return runs when the component unmounts
        return () => abortCtrl.abort();
    }, [password, passwordConfirm, username])

    useEffect(() => {
        // If everything is valid
        if (validate.username_filled && validate.matches && validate.length && validate.contains_let && validate.contains_num) {
            setEverythingValid(true)
        } else {
            setEverythingValid(false)
        }
    }, [validate])


    const markIcon = (isValidated) => {
        return isValidated ? <CheckMarkIcon className={"w-1/4 h-4 fill-current text-green-500"} /> : <XMarkIcon className={"w-1/4 h-4 fill-current text-red-500"} />
    }


    return (
        <div className=" container flex sm:h-screen m-auto">
            <div className="m-auto sm:shadow sm:border-2 border-opacity-50  ">
                <div className="p-10 ">
                    <p className="text-center mb-8 text-3xl">Create Account</p>
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
                                <input type="password" name="password" className="shadow bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-300" id="inline-password" placeholder="**********" pattern="^\S{6,}$" autoComplete="new-password" required onChange={(event) => setPassword(event.target.value)} />
                            </div>
                        </div>

                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password-check">
                                    Password Confirm
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input className="shadow bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-300" id="inline-password-check" type="password" placeholder="**********" required autoComplete="new-password"
                                    onChange={(event) => setPasswordConfirm(event.target.value)} />
                            </div>

                        </div>


                        <div className="md:flex md:items-center">
                            <div className="md:w-1/3"></div>
                            <div className="md:w-2/3">
                                <button disabled={!everythingValid} className={"shadow-md bg-indigo-500 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 disabled:bg-indigo-100 rounded "} id="sign-up-btn" type="submit" onClick={onButtonClick}>
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className={" p-10  " + ((everythingValid) ? "bg-green-50" : "bg-red-50")}>
                    <p className="text-center text-xl">Requirements</p>
                    <div className="flex  flex-col mt-4 content-center">
                        <div className="flex items-center my-2">
                            {markIcon(validate.username_filled)}
                            <p className="w-3/4">Username must be more than 3 characters</p>
                        </div>
                        <div className="flex items-center my-2">
                            {markIcon(validate.length)}
                            <p className="w-3/4">Contains more than 8 characters</p>
                        </div>
                        <div className="flex items-center my-2">
                            {markIcon(validate.contains_num)}
                            <p className="w-3/4">Contain at least 1 number</p>
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