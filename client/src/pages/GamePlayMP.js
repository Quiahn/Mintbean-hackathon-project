import React, { useState, useEffect } from 'react'
import TestCard from '../misc/Card'
import { Link } from "react-router-dom";

const initEnemyHand = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25
]

const initPlayerHand = [
    26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51
]

export default function GamePlayMP() {
    const [enemyHand, setEnemyhand] = useState([...initEnemyHand])
    const [playerHand, setPlayerHand] = useState([...initPlayerHand])
    const [red, setRed] = useState(0)
    const [blue, setBlue] = useState(26)
    const [play, setPlay] = useState(false)
    const [won, setWon] = useState(0)
    const [sign, setSign] = useState(null)
    const [warArr, setWarArr] = useState([])
    const [endGame, setEndGame] = useState(0)

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
        } else if (randomRed >= 26) {
            randomRed = randomRed - 26
        } else if (randomRed >= 13) {
            randomRed = randomRed - 13
        }

        if (randomBlue >= 39) {
            randomBlue -= 39
        } else if (randomBlue >= 26) {
            randomBlue -= 26
        } else if (randomBlue >= 13) {
            randomBlue -= 13
        }

        console.log(randomRed, randomBlue)
        if (randomBlue > randomRed) {
            let redArrPlaceHold = enemyHand
            redArrPlaceHold.splice(randomRedIndex, 1)
            setEnemyhand([...redArrPlaceHold])

            let blueArrPlaceHold = playerHand
            blueArrPlaceHold.splice(randomBlueIndex, 1)
            setPlayerHand([...blueArrPlaceHold])

            if (won === 4) {
                console.log("BLUE WON THE WAR")
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
                console.log("RED WON THE WAR")
                setEnemyhand((prevArr) => [...prevArr, ...warArr])
                setWarArr([])
            }
            setSign('>')
            setWon(1)
        } else if (randomBlue === randomRed) {
            console.log("WAR!")
            setSign('==')
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
        if (warArr.length >= 10) { setWon(0); return }

        let tempWarArr = []
        let redArrPlaceHold = enemyHand
        tempWarArr = redArrPlaceHold.splice(0, 4)
        setEnemyhand([...redArrPlaceHold])

        let blueArrPlaceHold = playerHand
        tempWarArr = tempWarArr.concat(blueArrPlaceHold.splice(0, 4))
        setPlayerHand([...blueArrPlaceHold])

        setWarArr((prev) => [...prev, ...tempWarArr])
        setWon(4)
        console.log(warArr);
    }, [won, blue, red, playerHand, enemyHand, warArr])

    useEffect(() => {
        if (enemyHand.length === 0) setEndGame(2)
        if (playerHand.length === 0) setEndGame(1)
    }, [enemyHand, playerHand, red, blue, won])

    const warComponent = () => {
        return (
            <>
                <p className="absolute  text-8xl transform -translate-y-2/4 -translate-x-2/4 scale-in-center " style={{ top: `60%`, left: `50%` }}>{"WAR"}</p>
                <p className="absolute slide-in-elliptic-top-fwd text-8xl transform -translate-y-2/4 -translate-x-2/4 text-red-500" style={{ top: `80%`, left: `50%` }}>{"-4"}</p>
                <p className="absolute slide-in-elliptic-top-fwd  text-8xl transform -translate-y-2/4 -translate-x-2/4 text-green-500" style={{ top: `20%`, left: `50%` }}>{"-4"}</p>
            </>
        )

    }

    const gameOverComp = () => {
        return (
            <>
                <div className="h-full w-full bg-yellow-700 absolute overflow-hidden">
                    <p className="absolute  text-5xl text-white transform  -translate-y-2/4 -translate-x-2/4 tex-break text-center" style={{ top: `30%`, left: `50%` }}>GAME OVER</p>
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
                        <div className="w-full h-full bg-blue-100 relative transform-gpu ">
                            <TestCard flip={true} cardId={red} pos={{ top: `50%`, left: `30%` }} />
                            <TestCard flip={true} cardId={blue} pos={{ top: `50%`, left: `70%` }} />

                            <p className={`absolute ${sign === '<' ? "text-green-500" : "text-red-500"} text-8xl transform -translate-y-2/4 -translate-x-2/4 `} style={{ top: `50%`, left: `50%` }}>{sign}</p>
                            <p className={`absolute bg-green-700 text-white p-3 text-2xl transform -translate-y-2/4 -translate-x-2/4 `} style={{ top: `80%`, left: `10%`, transform: `translate(-50%, -50%) rotateZ(${getRandomIntInclusive(-10, 10)}deg)` }}>You have {playerHand.length} Cards</p>
                            <p className={`absolute bg-red-700 text-white p-3 text-2xl transform -translate-y-2/4 -translate-x-2/4 `} style={{ top: `15%`, left: `80%`, transform: `translate(-50%, -50%) rotateZ(${getRandomIntInclusive(-10, 10)}deg)` }}>Enemy has {enemyHand.length} Cards</p>
                            {(sign === '==') ? warComponent() : null}

                            {enemyHand.map((card, i) => {
                                return (
                                    <TestCard key={i} flip={false} cardId={card} pos={{ top: `0%`, left: `${i * 4}%` }} />
                                )
                            })}
                            {playerHand.map((card, i) => {
                                return (
                                    <TestCard key={i} flip={false} cardId={card} pos={{ top: `100%`, left: `${i * 4}%` }} />
                                )
                            })}
                        </div>

                    </div>
                    <div className="w-full h-1/6 bg-yellow-100">
                        <button onClick={() => setPlay(!play)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Button
                        </button>
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