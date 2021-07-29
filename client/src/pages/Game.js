import React, { useState, useEffect } from 'react'
import Cookies from 'universal-cookie';
import axios from 'axios';


const cookies = new Cookies();

export default function Game() {
    const [authorized, setAuthorized] = useState(false)
    const [username, setUsername] = useState()
    const [id, setId] = useState()


    useEffect(() => {
        let token = cookies.get("token");
        if (!token) return
        axios.get(process.env.REACT_APP_SERVER_URI + "/api/game/start", {
            headers: {
                "auth-token": cookies.get("token")
            }
        })
            .then((res) => {
                console.log("Game Start: ", res)
                setUsername(res.data.username)
                setId(res.data.id)
                setAuthorized(true)
            })
            .catch(error => {
                console.log(error.response.data);
                setAuthorized(false)
            })
    }, [])


    const authorizedComponent = () => {
        return (
            <div>
                <p className="text-4xl text-center">Hello {username}</p>
                <p className="text-4xl text-center">Your id in database: {id} </p>
            </div>
        )
    }

    const unauthorizedComponent = () => {
        return (
            <div>
                <p className="text-4xl text-center">Please Login</p>
                <p className="text-4xl text-center">If you don't have an account, create one</p>
            </div>
        )
    }
    return (
        <div>
            {(authorized) ? authorizedComponent() : unauthorizedComponent()}
        </div>
    )
}
