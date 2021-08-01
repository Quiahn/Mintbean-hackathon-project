import React, { useState, useEffect } from 'react'
import Card from '../misc/Card'

function genRandom() {
    return Array(52).fill(null).map(() => Math.floor(Math.random() * 3))
}

function genRandomArr1() {
    return Array(26).fill(null).map(() => Math.floor(Math.random() * 26))
}
function genRandomArr2() {
    return Array(26).fill(null).map(() => Math.floor(Math.random() * 26) + 26)
}
const imageArr = genRandomArr1().concat(genRandomArr2())

export default function About() {
    const [zIndexArr, setZindex] = useState(imageArr)
    const [drawnRedCardsIndex, setDrawnRedCardsIndex] = useState([])
    const [drawnBlueCardsIndex, setDrawnBlueCardsIndex] = useState([])
    const [positions, setPositions] = useState([
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
    ])
    const [play, setPlay] = useState(false)


    useEffect(() => {
        if (play) {
            redDraw()
            blueDraw()
            setPlay(false)
        }
    }, [play, redDraw, blueDraw])

    const redDraw = () => {
        drawACard(true, 0, 25, 2)
    }

    const blueDraw = () => {
        drawACard(false, 26, 51, 5)
    }

    const blueDrawWar = () => {

    }

    const redDrawWar = () => {

    }



    const drawACard = (isRed, startIndex, endIndex, pos) => {
        if (isRed) {
            if (drawnRedCardsIndex.length > 25) return
            let randomCard = getRandomIntInclusive(startIndex, endIndex)
            console.log(drawnRedCardsIndex.length);
            //If random card was already drawn, then try again until
            while (drawnRedCardsIndex.includes(randomCard)) {
                randomCard = getRandomIntInclusive(startIndex, endIndex)
            }
            setDrawnRedCardsIndex(prevArr => [...prevArr, randomCard])
            changeArrayPos(randomCard, pos)
        } else {
            if (drawnBlueCardsIndex.length > 25) return
            let randomCard = getRandomIntInclusive(startIndex, endIndex)
            //If random card was already drawn, then try again until
            while (drawnBlueCardsIndex.includes(randomCard)) {
                randomCard = getRandomIntInclusive(startIndex, endIndex)
            }
            setDrawnBlueCardsIndex(prevArr => [...prevArr, randomCard])
            changeArrayPos(randomCard, pos)
        }
    }

    const changeArrayPos = (index, pos) => {
        let newArr = positions
        newArr[index] = pos
        setPositions([...newArr])
    }

    return (
        <div className="h-full flex flex-col overflow-hidden">
            <div className="h-5/6 w-full bg-indigo-50  overflow-hidden relative transform-gpu">
                {positions.map((pos, i) => (
                    <Card pos={pos} key={i} cardId={zIndexArr[i]}></Card>
                ))}
            </div>
            <div className="h-1/6 bg-red-50">
                <button onClick={() => blueDraw()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Blue Play</button>
                <button onClick={() => redDraw()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Red Play</button>
                <button onClick={() => blueDrawWar()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Blue War Stack</button>
                <button onClick={() => redDrawWar()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Red War Stack</button>
                <button onClick={() => setPlay(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >FLIP</button>
            </div>
        </div>
    )
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// 0 Enemy Deck
// 1 Enemy Win Stack
// 2 Enemy Play

// 3 Player Deck
// 4 Players Win Stack
// 5 Player's Play

// 6 Shuffle
// 7 War Deck


/* Game States */