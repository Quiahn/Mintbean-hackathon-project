import React, { useState, useEffect } from 'react'
import Cookies from 'universal-cookie';
import axios from 'axios';
import io from 'socket.io-client'



const cookies = new Cookies();

export default function Game() {
    const [authorized, setAuthorized] = useState(false)
    const [token, setToken] = useState(null)
    const [username, setUsername] = useState()
    const [id, setId] = useState()
    const [socket, setSocket] = useState(null)


    useEffect(() => {
        let cookieToken = cookies.get("token");
        console.log(cookieToken);
        if (!cookieToken) return
        setToken(cookieToken)
        axios.get(process.env.REACT_APP_SERVER_URI + "/api/game/start", {
            headers: {
                "auth-token": cookieToken
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

    useEffect(() => {
        if (!username || !id) return
        if (!socket)
            setSocket(io(process.env.REACT_APP_SERVER_URI, {
                auth: {
                    token: token
                },
                query: {
                    "userID": `${id}`,
                    "username": `${username}`
                }
            }))
        return () => {
            if (socket) {
                socket.emit('disconnected', username)
                socket.off()
            }

        }
    }, [socket, username, id, token])

    useEffect(() => {
        if (!socket) return
        socket.on('connection')
        socket.on('message', (data) => {
            console.log(data);
        })
    }, [socket])

    const onMultiPlayer = () => {
        if (!socket) return

        socket.emit('message', "From user " + username)


    }


    const authorizedComponent = () => {
        return (
            <div>
                <p className="text-4xl text-center">Hello {username}</p>
                <p className="text-4xl text-center">Your id in database: {id} </p>
                <button>Single Player</button>
                <button onClick={onMultiPlayer}>Multi Player</button>
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
