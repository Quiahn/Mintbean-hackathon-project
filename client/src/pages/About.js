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
    const [redAtPlay, setRedAtPlay] = useState()
    const [blueAtPlay, setBlueAtPlay] = useState()
    const [positions, setPositions] = useState([
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
    ])
    const [play, setPlay] = useState(false)

    //Game States
    const [playWin, setPlayWin] = useState('none')

    useEffect(() => {
        if (play) {
            redDraw()
            blueDraw()
            setPlay(false)
        }
        // eslint-disable-next-line
    }, [play])

    useEffect(() => {
        if (playWin === 'none') return
        if (playWin === 'red-won-play') {
            redWon()
            setPlayWin('none')
        } else if (playWin === 'blue-won-play') {
            blueWon()
            setPlayWin('none')
        }
    }, [playWin, redAtPlay, blueAtPlay])

    const redDraw = () => {
        drawACard(true, 0, 25, 2)
    }

    const blueDraw = () => {
        drawACard(false, 26, 51, 5)
    }

    const redWon = () => {
        console.log("red won", redAtPlay);
        changeArrayPos(redAtPlay, 1)
        changeArrayPos(blueAtPlay, 1)
    }

    const blueWon = () => {
        changeArrayPos(redAtPlay, 4)
        changeArrayPos(blueAtPlay, 4)
    }


    const drawACard = (isRed, startIndex, endIndex, pos) => {
        let randomBlueCard = undefined;
        let randomRedCard = undefined
        if (isRed) {
            if (drawnRedCardsIndex.length > 25) return
            randomRedCard = getRandomIntInclusive(startIndex, endIndex)
            setRedAtPlay(randomRedCard)
            while (drawnRedCardsIndex.includes(randomRedCard)) {
                randomRedCard = getRandomIntInclusive(startIndex, endIndex)
            }
            setDrawnRedCardsIndex(prevArr => [...prevArr, randomRedCard])
            changeArrayPos(randomRedCard, pos)
        } else {
            if (drawnBlueCardsIndex.length > 25) return
            randomBlueCard = getRandomIntInclusive(startIndex, endIndex)
            while (drawnBlueCardsIndex.includes(randomBlueCard)) {
                randomBlueCard = getRandomIntInclusive(startIndex, endIndex)
            }
            setBlueAtPlay(randomBlueCard)
            setDrawnBlueCardsIndex(prevArr => [...prevArr, randomBlueCard])
            changeArrayPos(randomBlueCard, pos)
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
                <button onClick={() => setPlayWin('red-won-play')} className="bg-red-300 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" >RED WON</button>
                <button onClick={() => setPlay(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Draw A Card</button>
                <button onClick={() => setPlayWin('blue-won-play')} className="bg-green-300 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" >PLAYER WON</button>
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
