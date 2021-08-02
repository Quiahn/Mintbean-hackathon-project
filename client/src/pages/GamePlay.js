import React, { useState, useEffect, useContext, useRef } from 'react'
import Card from '../misc/Card'
import { Link } from "react-router-dom";
import { UserContext } from '../misc/UserContext'
import Cookies from 'universal-cookie';
import io from 'socket.io-client'
const initEnemyHand = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25
]

const initPlayerHand = [
    26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51
]

const cookies = new Cookies()

export default function GamePlay() {
    const [enemyHand, setEnemyhand] = useState([...initEnemyHand])
    const [playerHand, setPlayerHand] = useState([...initPlayerHand])
    const [red, setRed] = useState(0)
    const [blue, setBlue] = useState(26)
    const [play, setPlay] = useState(false)
    const [won, setWon] = useState(0)
    const [sign, setSign] = useState(null)
    const [warArr, setWarArr] = useState([])
    const [endGame, setEndGame] = useState(0)
    const [cardDrawsCount, setCardDrawsCount] = useState(0)
    const { userDataGlobal } = useContext(UserContext)
    const [socket, setSocket] = useState(null)
    const cardDrawsCountRef = useRef({ drawsCount: cardDrawsCount, gameEnd: endGame, data: userDataGlobal.data })

    useEffect(() => {
        if (userDataGlobal.data === null) return
        if (socket === null) {
            setSocket(io(process.env.REACT_APP_SERVER_URI, {
                auth: {
                    token: cookies.get("token")
                },
                query: {
                    "userID": `${userDataGlobal.data.id}`,
                    "username": `${userDataGlobal.data.username}`
                }
            }))

        }

    }, [userDataGlobal, socket])

    useEffect(() => {
        cardDrawsCountRef.current = { drawsCount: cardDrawsCount, gameEnd: endGame, data: userDataGlobal.data }
    }, [cardDrawsCount, endGame, userDataGlobal])

    useEffect(() => {
        return () => {
            if (socket)
                socket.emit("game-ended", cardDrawsCountRef.current)
        }
    }, [socket])


    useEffect(() => {
        if (!play) return
        let randomRedIndex = getRandomIntInclusive(0, enemyHand.length - 1)
        let randomRed = enemyHand[randomRedIndex]
        let randomBlueIndex = getRandomIntInclusive(0, playerHand.length - 1)
        let randomBlue = playerHand[randomBlueIndex]
        setBlue(randomBlue)
        setRed(randomRed)

        if (randomRed > 39) {
            randomRed = randomRed - 39
        }
        if (randomRed >= 26) {
            randomRed = randomRed - 26
        }
        if (randomRed >= 13) {
            randomRed = randomRed - 13
        }

        if (randomBlue >= 39) {
            randomBlue -= 39
        }
        if (randomBlue >= 26) {
            randomBlue -= 26
        }
        if (randomBlue >= 13) {
            randomBlue -= 13
        }

        if (randomBlue > randomRed) {
            let redArrPlaceHold = enemyHand
            redArrPlaceHold.splice(randomRedIndex, 1)
            setEnemyhand([...redArrPlaceHold])

            let blueArrPlaceHold = playerHand
            blueArrPlaceHold.splice(randomBlueIndex, 1)
            setPlayerHand([...blueArrPlaceHold])

            if (won === 4) {
                setPlayerHand((prevArr) => [...prevArr, ...warArr])
                setWarArr([])
            }
            setSign('<')
            setWon(2)

        } else if (randomRed > randomBlue) {
            let redArrPlaceHold = enemyHand
            redArrPlaceHold.splice(randomRedIndex, 1)
            setEnemyhand([...redArrPlaceHold])

            let blueArrPlaceHold = playerHand
            blueArrPlaceHold.splice(randomBlueIndex, 1)
            setPlayerHand([...blueArrPlaceHold])
            if (won === 4) {
                setEnemyhand((prevArr) => [...prevArr, ...warArr])
                setWarArr([])
            }
            setSign('>')
            setWon(1)
        } else if (randomBlue === randomRed) {
            setSign('=')
            setWon(3)
        }
        setPlay(false)
    }, [play, enemyHand, playerHand, warArr, won])

    useEffect(() => {
        switch (won) {
            case 1:
                //Red Won
                setEnemyhand(prevArr => [...prevArr, blue, red])
                setWon(0)
                return
            case 2:
                //Player Won
                setPlayerHand(prevArr => [...prevArr, blue, red])
                setWon(0)
                return
            default:
                return;
        }
    }, [won, blue, red, playerHand, enemyHand])

    useEffect(() => {
        if (won !== 3) return
        if (warArr.length >= 20) { setWon(0); return }

        let tempWarArr = []
        let redArrPlaceHold = enemyHand
        tempWarArr = redArrPlaceHold.splice(0, 8)
        setEnemyhand([...redArrPlaceHold])

        let blueArrPlaceHold = playerHand
        tempWarArr = tempWarArr.concat(blueArrPlaceHold.splice(0, 8))
        setPlayerHand([...blueArrPlaceHold])

        setWarArr((prev) => [...prev, ...tempWarArr])
        setWon(4)
    }, [won, blue, red, playerHand, enemyHand, warArr])

    useEffect(() => {
        if (enemyHand.length === 0) {
            setEndGame(2)
            if (socket) socket.emit("game-ended", { ...cardDrawsCountRef.current, gameEnd: 2 })
        }
        if (playerHand.length === 0) {
            setEndGame(1)
            if (socket) socket.emit("game-ended", { ...cardDrawsCountRef.current, gameEnd: 1 })
        }
    }, [enemyHand, playerHand, red, blue, won, socket])

    const warComponent = () => {
        return (
            <>
                <p className="absolute bg-red-800 text-white px-1 text-6xl md:text-8xl z-20 scale-in-center " style={{ top: `60%`, left: `50%` }}>{"WAR"}</p>
                <p className="absolute slide-in-elliptic-top-fwd z-20  text-6xl md:text-8xl text-red-500" style={{ top: `70%`, left: `50%` }}>-8</p>
                <p className="absolute slide-in-elliptic-top-fwd  z-20 text-6xl md:text-8xl text-green-500" style={{ top: `20%`, left: `50%` }}>-8</p>
            </>
        )

    }

    const gameOverComp = () => {
        return (
            <>
                <div className="h-full w-full bg-yellow-700 absolute overflow-hidden">
                    <p className="absolute  text-5xl text-white transform  -translate-y-2/4 -translate-x-2/4 tex-break text-center" style={{ top: `25%`, left: `50%` }}>GAME</p>
                    {(endGame === 1) ? <p className="absolute bg-red-600 text-5xl p-1 transform  -translate-y-2/4 -translate-x-2/4 tex-break text-center" style={{ top: `40%`, left: `50%` }}>You lost</p> :
                        <p className="absolute bg-green-600 text-5xl p-1 text-white transform  -translate-y-2/4 -translate-x-2/4 tex-break text-center" style={{ top: `40%`, left: `50%` }}>YOU WON!</p>}
                    <Link to='../game'>
                        <button onClick={() => setPlay(!play)} className="absolute transform  -translate-y-2/4 -translate-x-2/4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style={{ top: `60%`, left: `50%` }}>Back to dashboard</button>
                    </Link>
                </div>
            </>
        )
    }
    return (
        <>
            {(endGame !== 0) ? gameOverComp() :
                <div className="w-full h-full overflow-hidden">
                    <div className="w-full h-5/6 bg-red-100 overflow-hidden">
                        <div className={`w-full h-full ${(sign === '<') ? "bg-green-50" : sign === '>' ? "bg-red-50" : 'bg-blue-100'} relative transform-gpu `}>
                            <Card flip={true} cardId={red} isPlaying={true} pos={{ top: `50%`, left: `30%` }} />
                            <Card flip={true} cardId={blue} isPlaying={true} pos={{ top: `50%`, left: `70%` }} />
                            <p className={`absolute ${sign === '<' ? "text-green-500" : "text-red-500"} z-20 text-6xl md:text-8xl`} style={{ top: `50%`, left: `50%`, transform: `rotateZ(${getRandomIntInclusive(-10, 10)}deg)  translate(-50%, -50%)` }}>{sign}</p>
                            <p className={`absolute bg-green-700 text-white p-1 text-base md:text-xl`} style={{ top: `78%`, left: `10%`, transform: `rotateZ(${getRandomIntInclusive(-10, 10)}deg) translate(-50%, -50%) z-20` }}>You: {playerHand.length}</p>
                            <p className={`absolute bg-red-700 text-white p-1 text-base md:text-xl`} style={{ top: `22%`, left: `80%`, transform: `rotateZ(${getRandomIntInclusive(-10, 10)}deg) translate(-50%, -50%) z-20` }}>AI: {enemyHand.length}</p>
                            <p className={`absolute bg-green-700 text-white p-1 text-base md:text-xl`} style={{ top: `80%`, left: `10%`, transform: `rotateZ(${getRandomIntInclusive(-10, 10)}deg) translate(-50%, -50%) z-20` }}>{playerHand.length + enemyHand.length}</p>
                            {(sign === '=') ? warComponent() : null}

                            {enemyHand.map((card, i) => {
                                return (
                                    <Card key={i} flip={false} cardId={card} isPlaying={false} pos={{ top: `0%`, left: `${i * 2}%` }} />
                                )
                            })}
                            {playerHand.map((card, i) => {
                                return (
                                    <Card key={i} flip={false} cardId={card} isPlaying={false} pos={{ top: `100%`, left: `${i * 2}%` }} />
                                )
                            })}
                        </div>
                    </div>
                    <div className="w-full h-1/6 bg-yellow-100 text-center ">
                        <div className="w-full h-5/6 grid grid grid-cols-3">
                            <div className={`h-full text-center  ${(enemyHand.length !== playerHand.length) ? "bg-green-300" : "bg-yellow-300"}  flex justify-center content-center`}>
                                <div className=" m-auto">
                                    {(enemyHand.length === playerHand.length) ? <p className="text-xl md:text-3xl lg:text-5xl text-center">{"Tie"}</p> :
                                        <>
                                            <p className="text-xl md:text-3xl lg:text-5xl text-center">{"You"}</p>
                                            <p className="text-l md:text-2xl lg:text-4xl text-center">{(enemyHand.length < playerHand.length) ? " Winning" : "Losing"}</p>
                                            <p className="text-l md:text-2xl lg:text-4xl text-center">{(enemyHand.length < playerHand.length) ? null : (enemyHand.length - playerHand.length) + " Cards Behind"}
                                            </p>
                                        </>}
                                </div>
                            </div>
                            <button onClick={() => { setPlay(!play); setCardDrawsCount((prevVal) => prevVal + 1) }} className="bg-red-500 h-full text-base sm:text-xl md:text-6xl lg:text-8xl hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                PLAY
                            </button>
                            <div className={`h-full text-center   ${(enemyHand.length !== playerHand.length) ? "bg-red-300" : "bg-yellow-300"} flex justify-center content-center`}>
                                <div className=" m-auto">
                                    {(enemyHand.length === playerHand.length) ? <p className="text-xl md:text-3xl lg:text-5xl text-center">{"Tie"}</p> :
                                        <>
                                            <p className="text-xl md:text-3xl lg:text-5xl text-center">{"AI"}</p>
                                            <p className="text-l md:text-2xl lg:text-4xl text-center">{(enemyHand.length > playerHand.length) ? " Winning" : "Losing"}</p>
                                            <p className="text-l md:text-2xl lg:text-4xl text-center">{(enemyHand.length > playerHand.length) ? null : (playerHand.length - enemyHand.length) + " Cards Behind"}
                                            </p>
                                        </>}
                                </div>
                            </div>
                        </div>
                        <div className={`relative w-full h-1/6 ${(enemyHand.length !== playerHand.length) ? "bg-red-300" : "bg-yellow-300"}`}>
                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-amber-200 h-full">
                                <div style={{ width: `${Math.floor((playerHand.length / 52.0) * 100.0)}%` }} className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${(enemyHand.length !== playerHand.length) ? "bg-green-300" : "bg-yellow-300"}`}></div>
                            </div>
                        </div>
                    </div>

                </div>

            }
        </>

    )
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 *
 * Each Player gets 26 cards
 * Each Player draws 1 card with face up
 * The Who ever has the highest card will get the those 2 cards on their pile
 * Who ever gets all 52 cards will win the game
 *
 * If drawn cards are the same ranked
 * Then each players will draw 4 more cards with the last one face up (Stake is 10 cards in total)
 * Who ever has the highest card at last will get the whole pile
 *
 * If somehow even the last cards are the same it will repeat until someone gets a higher card
 */


    //0 default
    //1 red won
    //2 player won
    //3 war