import React, { useState } from 'react'
import Card from '../misc/Card';
import c2 from '../icons/c-2.jpg'
import c3 from '../icons/c-3.jpg'
import c4 from '../icons/c-4.jpg'
import c5 from '../icons/c-5.jpg'
import c6 from '../icons/c-6.jpg'
import c7 from '../icons/c-7.jpg'
import c8 from '../icons/c-8.jpg'
import c9 from '../icons/c-9.jpg'
import c10 from '../icons/c-10.jpg'
import c11 from '../icons/c-j.jpg'
import c12 from '../icons/c-q.jpg'
import c13 from '../icons/c-k.jpg'
import cA from '../icons/c-a.jpg'

import d2 from '../icons/d-2.jpg'
import d3 from '../icons/d-3.jpg'
import d4 from '../icons/d-4.jpg'
import d5 from '../icons/d-5.jpg'
import d6 from '../icons/d-6.jpg'
import d7 from '../icons/d-7.jpg'
import d8 from '../icons/d-8.jpg'
import d9 from '../icons/d-9.jpg'
import d10 from '../icons/d-10.jpg'
import d11 from '../icons/d-j.jpg'
import d12 from '../icons/d-q.jpg'
import d13 from '../icons/d-k.jpg'
import dA from '../icons/d-a.jpg'

import h2 from '../icons/h-2.jpg'
import h3 from '../icons/h-3.jpg'
import h4 from '../icons/h-4.jpg'
import h5 from '../icons/h-5.jpg'
import h6 from '../icons/h-6.jpg'
import h7 from '../icons/h-7.jpg'
import h8 from '../icons/h-8.jpg'
import h9 from '../icons/h-9.jpg'
import h10 from '../icons/h-10.jpg'
import h11 from '../icons/h-j.jpg'
import h12 from '../icons/h-q.jpg'
import h13 from '../icons/h-k.jpg'
import hA from '../icons/h-a.jpg'

import s2 from '../icons/s-2.jpg'
import s3 from '../icons/s-3.jpg'
import s4 from '../icons/s-4.jpg'
import s5 from '../icons/s-5.jpg'
import s6 from '../icons/s-6.jpg'
import s7 from '../icons/s-7.jpg'
import s8 from '../icons/s-8.jpg'
import s9 from '../icons/s-9.jpg'
import s10 from '../icons/s-10.jpg'
import s11 from '../icons/s-j.jpg'
import s12 from '../icons/s-q.jpg'
import s13 from '../icons/s-k.jpg'
import sA from '../icons/s-a.jpg'


const bluePositions = {
    at_hand: { top: `100%`, left: `60%`, "filter": "brightness(100%)" },
    at_play: { top: `50%`, left: `60%`, "filter": "brightness(100%)" },
    at_win_stack: { top: `90%`, left: `10%`, "filter": "brightness(50%)" },
    at_loss_stack: { top: `10%`, left: `90%`, "filter": "brightness(50%)" },
    at_shuffle: { top: `50%`, left: `10%`, "filter": "brightness(100%)" },
    at_middle: { top: `50%`, left: `50%`, "filter": "brightness(100%)" }
}


const redPositions = {
    at_hand: { top: `0%`, left: `40%`, "filter": "brightness(100%)" },
    at_play: { top: `50%`, left: `40%`, "filter": "brightness(100%)" },
    at_win_stack: { top: `10%`, left: `90%`, "filter": "brightness(50%)" },
    at_loss_stack: { top: `90%`, left: `10%`, "filter": "brightness(50%)" },
    at_shuffle: { top: `50%`, left: `10%`, "filter": "brightness(100%)" },
    at_middle: { top: `50%`, left: `50%`, "filter": "brightness(100%)" }
}

export default function About() {


    const initCardArrBlue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]
    const initCardArrRed = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]

    //Positions
    const [redPos, setRedPos] = useState(redPositions.at_hand)
    const [bluePos, setBluePos] = useState(bluePositions.at_hand)

    //Flip
    const [flip, setFlip] = useState(false)

    //Global
    const [allMove, setAllMove] = useState(true)

    //Red
    const [redId, setRedId] = useState(0)
    const [redAtHand, setRedAtHand] = useState(initCardArrRed)
    const [redAtPlay, setRedAtPlay] = useState([])
    const [redAtWin, setRedAtWin] = useState([])

    //Blue
    const [blueId, setBlueId] = useState(0)
    const [blueAtHand, setBlueAtHand] = useState(initCardArrBlue)
    const [blueAtPlay, setBlueAtPlay] = useState([])
    const [blueAtWin, setBlueAtWin] = useState([])

    function playBlue() {
        setBluePos(bluePositions.at_play)
        //Blue
        let placeHoldBlue = blueAtHand
        let blue = placeHoldBlue.pop();
        setBlueId(blue)
        setBlueAtPlay([...blueAtPlay, blue])
        setBlueAtHand(placeHoldBlue)
    }

    function playRed() {
        if (!redAtHand || redAtHand.length === 0) {
            reset()
        }
        setRedPos(redPositions.at_play)
        //Red
        let placeHoldRed = redAtHand
        let red = placeHoldRed.pop();
        console.log(" pop ", red)
        setRedId(red)
        setRedAtPlay([...redAtPlay, red])
        setRedAtHand(placeHoldRed)
    }
    function atHand() {
        reset()
        setBluePos(bluePositions.at_hand)
        setRedPos(redPositions.at_hand)
    }
    function redWin() {
        clearTable()
        setBluePos(bluePositions.at_loss_stack)
        setRedPos(redPositions.at_win_stack)
    }

    function blueWin() {
        clearTable()
        setBluePos(bluePositions.at_win_stack)
        setRedPos(redPositions.at_loss_stack)
    }

    function shuffle() {
        reset()
        setBluePos(bluePositions.at_shuffle)
        setRedPos(redPositions.at_shuffle)
    }

    function reset() {
        setFlip(false)
        setAllMove(true)

        //Red
        setRedId(0)
        setRedAtHand(initCardArrRed)
        setRedAtPlay([])
        setRedAtWin([])

        //Blue
        setBlueId(0)
        setBlueAtHand(initCardArrBlue)
        setBlueAtPlay([])
        setBlueAtWin([])
    }

    function flipCard() {
        setFlip(prev => !prev)
    }

    function setAll() {
        setAllMove(prev => !prev)
    }

    function clearTable() {
        //Red
        let placeHoldRed = redAtPlay
        let red = placeHoldRed.pop();
        setRedId(red)
        setRedAtWin([...redAtWin, red])
        setRedAtPlay(placeHoldRed)

        //Blue
        let placeHoldBlue = blueAtPlay
        let blue = placeHoldBlue.pop();
        setBlueId(blue)
        setBlueAtWin([...blueAtWin, blue])
        setBlueAtPlay(placeHoldBlue)
    }
    return (
        <div className={"h-full flex flex-col overflow-hidden "}>
            <div className="h-5/6 w-full bg-indigo-50  overflow-hidden relative transform-gpu">
                <p className="absolute top-0 z-50">{blueAtHand.join(' ')}</p>
                <p className="absolute top-4 z-50">{blueAtPlay.join(' ')}</p>
                <p className="absolute top-8 z-50">{blueAtWin.join(' ')}</p>
                <p className="absolute top-20 z-50">{redAtHand.join(' ')}</p>
                <p className="absolute top-24 z-50">{redAtPlay.join(' ')}</p>
                <p className="absolute top-28 z-50">{redAtWin.join(' ')}</p>
                {/* Player */}
                <Card id={1} cardPos={bluePos} isRed={true} moveId={redId} allMove={allMove} cardFlip={flip} url={c2} rotation={getRandomInt(-20, 20)} />
                <Card id={2} cardPos={bluePos} isRed={true} moveId={blueId} allMove={allMove} cardFlip={flip} url={c3} rotation={getRandomInt(-20, 20)} />
                <Card id={3} cardPos={bluePos} isRed={true} moveId={blueId} allMove={allMove} cardFlip={flip} url={c4} rotation={getRandomInt(-20, 20)} />
                <Card id={4} cardPos={bluePos} isRed={true} moveId={blueId} allMove={allMove} cardFlip={flip} url={c5} rotation={getRandomInt(-20, 20)} />
                <Card id={5} cardPos={bluePos} isRed={true} moveId={blueId} allMove={allMove} cardFlip={flip} url={c6} rotation={getRandomInt(-20, 20)} />
                <Card id={6} cardPos={bluePos} isRed={true} moveId={blueId} allMove={allMove} cardFlip={flip} url={c7} rotation={getRandomInt(-20, 20)} />
                <Card id={7} cardPos={bluePos} isRed={true} moveId={blueId} allMove={allMove} cardFlip={flip} url={c8} rotation={getRandomInt(-20, 20)} />
                <Card id={8} cardPos={bluePos} isRed={true} moveId={blueId} allMove={allMove} cardFlip={flip} url={c9} rotation={getRandomInt(-20, 20)} />
                <Card id={9} cardPos={bluePos} isRed={true} moveId={blueId} allMove={allMove} cardFlip={flip} url={c10} rotation={getRandomInt(-20, 20)} />
                <Card id={10} cardPos={bluePos} isRed={true} moveId={blueId} allMove={allMove} cardFlip={flip} url={c11} rotation={getRandomInt(-20, 20)} />
                <Card id={11} cardPos={bluePos} isRed={true} moveId={blueId} allMove={allMove} cardFlip={flip} url={c12} rotation={getRandomInt(-20, 20)} />
                <Card id={12} cardPos={bluePos} isRed={true} moveId={blueId} allMove={allMove} cardFlip={flip} url={c13} rotation={getRandomInt(-20, 20)} />
                <Card id={13} cardPos={bluePos} isRed={true} moveId={blueId} allMove={allMove} cardFlip={flip} url={cA} rotation={getRandomInt(-20, 20)} />
                <Card id={14} cardPos={bluePos} isRed={true} moveId={blueId} allMove={allMove} cardFlip={flip} url={s2} rotation={getRandomInt(-20, 20)} />
                <Card id={15} cardPos={bluePos} isRed={true} moveId={blueId} allMove={allMove} cardFlip={flip} url={s3} rotation={getRandomInt(-20, 20)} />
                <Card id={16} cardPos={bluePos} isRed={true} moveId={blueId} allMove={allMove} cardFlip={flip} url={s4} rotation={getRandomInt(-20, 20)} />
                <Card id={17} cardPos={bluePos} isRed={true} moveId={blueId} allMove={allMove} cardFlip={flip} url={s5} rotation={getRandomInt(-20, 20)} />
                <Card id={18} cardPos={bluePos} isRed={true} moveId={blueId} allMove={allMove} cardFlip={flip} url={s6} rotation={getRandomInt(-20, 20)} />
                <Card id={19} cardPos={bluePos} isRed={true} moveId={blueId} allMove={allMove} cardFlip={flip} url={s7} rotation={getRandomInt(-20, 20)} />
                <Card id={20} cardPos={bluePos} isRed={true} moveId={blueId} allMove={allMove} cardFlip={flip} url={s8} rotation={getRandomInt(-20, 20)} />
                <Card id={21} cardPos={bluePos} isRed={true} moveId={blueId} allMove={allMove} cardFlip={flip} url={s9} rotation={getRandomInt(-20, 20)} />
                <Card id={22} cardPos={bluePos} isRed={true} moveId={blueId} allMove={allMove} cardFlip={flip} url={s10} rotation={getRandomInt(-20, 20)} />
                <Card id={23} cardPos={bluePos} isRed={true} moveId={blueId} allMove={allMove} cardFlip={flip} url={s11} rotation={getRandomInt(-20, 20)} />
                <Card id={24} cardPos={bluePos} isRed={true} moveId={blueId} allMove={allMove} cardFlip={flip} url={s12} rotation={getRandomInt(-20, 20)} />
                <Card id={25} cardPos={bluePos} isRed={true} moveId={blueId} allMove={allMove} cardFlip={flip} url={s13} rotation={getRandomInt(-20, 20)} />
                <Card id={26} cardPos={bluePos} isRed={true} moveId={blueId} allMove={allMove} cardFlip={flip} url={sA} rotation={getRandomInt(-20, 20)} />
                {/* Enemy */}
                <Card id={1} cardPos={redPos} isRed={true} moveId={redId} allMove={allMove} cardFlip={flip} url={d2} rotation={getRandomInt(-20, 20)} />
                <Card id={2} cardPos={redPos} isRed={true} moveId={redId} allMove={allMove} cardFlip={flip} url={d3} rotation={getRandomInt(-20, 20)} />
                <Card id={3} cardPos={redPos} isRed={true} moveId={redId} allMove={allMove} cardFlip={flip} url={d4} rotation={getRandomInt(-20, 20)} />
                <Card id={4} cardPos={redPos} isRed={true} moveId={redId} allMove={allMove} cardFlip={flip} url={d5} rotation={getRandomInt(-20, 20)} />
                <Card id={5} cardPos={redPos} isRed={true} moveId={redId} allMove={allMove} cardFlip={flip} url={d6} rotation={getRandomInt(-20, 20)} />
                <Card id={6} cardPos={redPos} isRed={true} moveId={redId} allMove={allMove} cardFlip={flip} url={d7} rotation={getRandomInt(-20, 20)} />
                <Card id={7} cardPos={redPos} isRed={true} moveId={redId} allMove={allMove} cardFlip={flip} url={d8} rotation={getRandomInt(-20, 20)} />
                <Card id={8} cardPos={redPos} isRed={true} moveId={redId} allMove={allMove} cardFlip={flip} url={d9} rotation={getRandomInt(-20, 20)} />
                <Card id={9} cardPos={redPos} isRed={true} moveId={redId} allMove={allMove} cardFlip={flip} url={d10} rotation={getRandomInt(-20, 20)} />
                <Card id={10} cardPos={redPos} isRed={true} moveId={redId} allMove={allMove} cardFlip={flip} url={d11} rotation={getRandomInt(-20, 20)} />
                <Card id={11} cardPos={redPos} isRed={true} moveId={redId} allMove={allMove} cardFlip={flip} url={d12} rotation={getRandomInt(-20, 20)} />
                <Card id={12} cardPos={redPos} isRed={true} moveId={redId} allMove={allMove} cardFlip={flip} url={d13} rotation={getRandomInt(-20, 20)} />
                <Card id={13} cardPos={redPos} isRed={true} moveId={redId} allMove={allMove} cardFlip={flip} url={dA} rotation={getRandomInt(-20, 20)} />
                <Card id={14} cardPos={redPos} isRed={true} moveId={redId} allMove={allMove} cardFlip={flip} url={h2} rotation={getRandomInt(-20, 20)} />
                <Card id={15} cardPos={redPos} isRed={true} moveId={redId} allMove={allMove} cardFlip={flip} url={h3} rotation={getRandomInt(-20, 20)} />
                <Card id={16} cardPos={redPos} isRed={true} moveId={redId} allMove={allMove} cardFlip={flip} url={h4} rotation={getRandomInt(-20, 20)} />
                <Card id={17} cardPos={redPos} isRed={true} moveId={redId} allMove={allMove} cardFlip={flip} url={h5} rotation={getRandomInt(-20, 20)} />
                <Card id={18} cardPos={redPos} isRed={true} moveId={redId} allMove={allMove} cardFlip={flip} url={h6} rotation={getRandomInt(-20, 20)} />
                <Card id={19} cardPos={redPos} isRed={true} moveId={redId} allMove={allMove} cardFlip={flip} url={h7} rotation={getRandomInt(-20, 20)} />
                <Card id={20} cardPos={redPos} isRed={true} moveId={redId} allMove={allMove} cardFlip={flip} url={h8} rotation={getRandomInt(-20, 20)} />
                <Card id={21} cardPos={redPos} isRed={true} moveId={redId} allMove={allMove} cardFlip={flip} url={h9} rotation={getRandomInt(-20, 20)} />
                <Card id={22} cardPos={redPos} isRed={true} moveId={redId} allMove={allMove} cardFlip={flip} url={h10} rotation={getRandomInt(-20, 20)} />
                <Card id={23} cardPos={redPos} isRed={true} moveId={redId} allMove={allMove} cardFlip={flip} url={h11} rotation={getRandomInt(-20, 20)} />
                <Card id={24} cardPos={redPos} isRed={true} moveId={redId} allMove={allMove} cardFlip={flip} url={h12} rotation={getRandomInt(-20, 20)} />
                <Card id={25} cardPos={redPos} isRed={true} moveId={redId} allMove={allMove} cardFlip={flip} url={h13} rotation={getRandomInt(-20, 20)} />
                <Card id={26} cardPos={redPos} isRed={true} moveId={redId} allMove={allMove} cardFlip={flip} url={hA} rotation={getRandomInt(-20, 20)} />
            </div>
            <div className="h-1/6 flex flex-row bg-gray-200 flex-wrap overflow-y-scroll">
                <button onClick={() => shuffle()} className="m-2 h-10 bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Shuffle</button>
                <button onClick={() => atHand()} className="m-2 h-10 bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">At Hand</button>
                <button onClick={() => flipCard()} className="m-2 h-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Flip: {flip + ''}</button>
                <button onClick={() => setAll()} className="m-2 h-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">All: {allMove + ''}</button>
                <button onClick={() => blueWin()} className="m-2 h-10 bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Player Wins</button>
                <button onClick={() => playBlue()} className="m-2 h-10 bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Play Blue</button>
                <button onClick={() => playRed()} className="m-2 h-10 bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Play Red</button>
                <button onClick={() => redWin()} className="m-2 h-10 bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Enemy Wins</button>
                <button onClick={() => reset()} className="m-2 h-10 bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Restart</button>


            </div>
        </div>
    )


}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
