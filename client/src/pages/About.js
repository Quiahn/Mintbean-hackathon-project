import React, { useState, useEffect } from 'react'
import Card from '../misc/Card'

const imageArr = Array(26).fill(null).map(() => getRandomIntInclusive(0, 25)).concat(Array(26).fill(null).map(() => getRandomIntInclusive(26, 51)))
const posArr = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
]
export default function About() {
    // ZIndex: Images
    const [zIndexArr, setZindex] = useState(imageArr)

    // Card Positions
    const [positions, setPositions] = useState(posArr)

    // Cards that has ben drawn ()
    const [drawnRedCardsIndex, setDrawnRedCardsIndex] = useState([])
    const [drawnBlueCardsIndex, setDrawnBlueCardsIndex] = useState([])

    // Indexs of cards that are in play
    const [redAtPlay, setRedAtPlay] = useState()
    const [blueAtPlay, setBlueAtPlay] = useState()

    // Boolean: Where to draw that card from hand to play
    const [drawRedCard, setDrawRedCard] = useState(false)
    const [drawBlueCard, setDrawBlueCard] = useState(false)

    // Condition to specify who won the play (2 cards that in the play)
    // blue-won-play, red-won-play, none
    const [playWin, setPlayWin] = useState('none')

    //Red Card move from Point A to Point B
    const [redMoveTo, setRedMoveTo] = useState()
    const [redIndexToMove, setRedIndexToMove] = useState()
    const [moveRed, setMoveRed] = useState(false)


    //Red Card Draw
    useEffect(() => {
        if (drawRedCard) {
            let randomRedCard = getRandomIntInclusive(0, 25)
            if (!drawnBlueCardsIndex.includes(randomRedCard)) {
                setRedAtPlay(randomRedCard)
                setDrawnRedCardsIndex(prevArr => [...prevArr, randomRedCard])
                setRedIndexToMove(randomRedCard)
                setRedMoveTo(2)
                setMoveRed(true)
                setDrawRedCard(false)
            }
        }
    }, [drawRedCard, drawnBlueCardsIndex])

    useEffect(() => {
        if (moveRed) {
            let newArr = positions
            newArr[redIndexToMove] = redMoveTo
            setPositions([...newArr])
            setMoveRed(false)
        }

    }, [moveRed, redMoveTo, redIndexToMove, positions])


    return (
        <div className="h-full flex flex-col overflow-hidden">
            <div className="h-5/6 w-full bg-indigo-50  overflow-hidden relative transform-gpu">
                {positions.map((pos, i) => (
                    <Card pos={pos} key={i} cardId={zIndexArr[i]}></Card>
                ))}
            </div>
            <div className="h-1/6 bg-red-50">
                <button onClick={() => setPlayWin('red-won-play')} className="bg-red-300 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" >RED WON</button>
                <button onClick={() => { setDrawRedCard(true); setDrawBlueCard(true) }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Draw A Card</button>
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
