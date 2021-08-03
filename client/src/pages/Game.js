import React, { useState, useEffect, useContext } from 'react'
import Cookies from 'universal-cookie';
import axios from 'axios';
import io from 'socket.io-client'
import Chat from '../misc/Chat';
import StatCards from '../misc/StatCards';
import { UserContext } from '../misc/UserContext'
import { Link, useRouteMatch } from 'react-router-dom';

const cookies = new Cookies();

export default function Game() {
    let { url } = useRouteMatch();
    const [authorized, setAuthorized] = useState(false)
    const [token, setToken] = useState(null)
    const [username, setUsername] = useState()
    const [id, setId] = useState()
    const [socket, setSocket] = useState(null)
    const [message, setMessage] = useState(null)
    const [messages, setMessages] = useState([{ "message": "Welcome to Card Wars! Chat with others in the lobby here! To test this chat you can open a new incognito tab and chat with yourself! It works! ", "from": "AI" }])
    const [userData, setUserData] = useState({})
    const { setUserDataGlobal } = useContext(UserContext)

    useEffect(() => {
        let cookieToken = cookies.get("token");
        if (!cookieToken) return
        setToken(cookieToken)
        axios.get(process.env.REACT_APP_SERVER_URI + "/api/game/start", {
            headers: {
                "auth-token": cookieToken
            }
        })
            .then((res) => {
                setUserData(res.data)
                setUsername(res.data.username)
                setId(res.data.id)
                setAuthorized(true)
                setUserDataGlobal({ loggedIn: true, data: res.data })
            })
            .catch(error => {
                console.log(error);
                setAuthorized(false)
            })
        // eslint-disable-next-line
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
        socket.emit("someoneConnected", username)

        socket.on('message', (data) => {
            setMessages(prevMsgs => [...prevMsgs, data])
            let element = document.getElementById("scroll-chat-div");
            element.scrollTop = element.scrollHeight;
        })

        socket.on("someoneConnected", (data) => {
            console.log(data);
        })
    }, [socket, username])

    const onSendMessage = () => {
        if (!socket) return
        if (!message || message === '') return
        socket.emit("message", { message: message, from: username })
        setMessages(prevMsgs => [...prevMsgs, { message: message, from: username }])
    }


    const onGameStart = () => {
        if (!socket) return
        socket.emit("game-started", { id: id, gamesPlayed: userData.gamesPlayed })
    }


    const authorizedComponent = () => {
        return (
            <div className="container mx-auto h-full">
                <p className="text-5xl text-center m-10 break-normal">Hello {username}</p>
                <div className=" max-w-3xl m-auto px-20 my-20">
                    <Link to={`${url}/play`} onClick={() => onGameStart()}>
                        <button className="bg-red-500 w-full h-full hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded">PLAY</button>
                    </Link>
                </div>
                <div className='w-full grid grid-cols-1 md:grid-cols-3 place-content-center'>
                    <div className="w-full"> <Chat setMsg={setMessage} obj={messages} user={username} sendMsg={onSendMessage} /> </div>
                    <div className="m-1">
                        <StatCards title={"Username"} stat={userData.username} />
                        <StatCards title={"Account Age (in Minutes)"} stat={new Date(new Date().getTime() - new Date(userData.date).getTime()).getMinutes()} />
                        <StatCards title={"Id"} stat={userData.id} />
                        <StatCards title={"Games Played"} stat={userData.gamesPlayed} />
                        <StatCards title={"Games Lost"} stat={userData.gamesLost} />
                        <StatCards title={"Games Won"} stat={userData.gamesWon} />
                        <StatCards title={"CardsDrawn"} stat={userData.cardsDrawn} />
                    </div>
                    <div className="h-4/6 overflow-x-hidden overflow-y-scroll bg-gray-100 p-2 m-1">
                        <p className="text-xl break-all p-1">The goal is to be the first player to win all 52 cards</p>

                        <p className="text-2xl break-all p-1">THE DEAL</p>
                        <p className="text-base break-all p-1"> The deck is divided evenly, with each player receiving 26 cards, dealt one at a time, face down. Anyone may deal first. Each player places their stack of cards face down, in front of them.</p>

                        <p className="text-2xl  break-all p-1">THE PLAY</p>
                        <p className="text-base break-all p-1">Each player turns up a card at the same time and the player with the higher card takes both cards and puts them, face down, on the bottom of his stack.</p>

                        <p className="text-base break-all p-1"> If the cards are the same rank, it is War. Each player turns up one card face down and one card face up. The player with the higher cards takes both piles (six cards). If the turned-up cards are again the same rank, each player places another card face down and turns another card face up. The player with the higher card takes all 10 cards, and so on.</p>

                        <p className="text-2xl  break-all p-1">HOW TO KEEP SCORE</p>
                        <p className="text-base break-all p-1">The game ends when one player has won all the cards.</p>
                    </div>
                </div>

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
