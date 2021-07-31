import React, { useState, useEffect } from 'react'
import Card from '../misc/Card';


const bluePositions = {
    at_hand: { top: `100%`, left: `60%` },
    at_play: { top: `50%`, left: `60%` },
    at_win_stack: { top: `100%`, left: `15%` },
    at_loss_stack: { top: `0%`, left: `70%` },
    at_shuffle: { top: `50%`, left: `10%` },
    at_middle: { top: `50%`, left: `50%` }
}



const redPositions = {
    at_hand: { top: `0%`, left: `40%` },
    at_play: { top: `50%`, left: `40%` },
    at_win_stack: { top: `0%`, left: `70%` },
    at_loss_stack: { top: `100%`, left: `15%` },
    at_shuffle: { top: `50%`, left: `10%` },
    at_middle: { top: `50%`, left: `50%` }
}

const redDeck = (redP, moveId, allMove, flipCard) => {
    let key = 0;
    return Array.apply(null, { length: 26 }).map((e, i) => (
        <Card key={key++} id={key} cardPos={redP} isRed={false} moveId={moveId} allMove={allMove} cardFlip={flipCard} rotation={getRandomInt(-20, 20)}></Card>
    ));
}

const blueDeck = (blueP, moveId, allMove, flipCard) => {
    let key = 0;
    return Array.apply(null, { length: 26 }).map((e, i) => (
        <Card key={key++} id={key} cardPos={blueP} isRed={true} moveId={moveId} allMove={allMove} cardFlip={flipCard} rotation={getRandomInt(-20, 20)}></Card>
    ));
}


export default function About() {
    const [redP, setRedP] = useState(redPositions.at_middle)
    const [blueP, setBlueP] = useState(bluePositions.at_middle)
    const [flip, setFlip] = useState(false)
    const [moveId, setMoveId] = useState(0)
    const [allMove, setAllMove] = useState(true)
    const [playPool, setPlayPool] = useState([])
    const [atWar, setAtWar] = useState('')
    const [test, setTest] = useState('')
    const [idBeforeWar, setIdBeforeWar] = useState(null)


    useEffect(() => {
        if (atWar === 'war-over') {
            if (playPool.length === 0) return
            setIdBeforeWar(prevValue => prevValue + 1)
            console.log(idBeforeWar);
            let e = playPool
            setMoveId(e.pop())
            setRedP(redPositions.at_win_stack);
            setBlueP(bluePositions.at_loss_stack);
            setPlayPool(e)
            setTest(prevTest => !prevTest)
        }

        // eslint-disable-next-line
    }, [atWar, playPool, moveId, test])

    useEffect(() => {
        if (moveId > 26) {
            setAllMove(true)
            setMoveId(0)
            setRedP(redPositions.at_middle)
            setBlueP(bluePositions.at_middle)
        }
        setAllMove(false)
    }, [moveId])


    useEffect(() => {
        if (atWar === 'war-started' && !playPool.includes(moveId)) {
            setPlayPool([...playPool, moveId])
        }

    }, [atWar, moveId, playPool])

    function atHand() {

        setMoveId(0);
        setAllMove(true);
        setRedP(redPositions.at_hand);
        setBlueP(bluePositions.at_hand)
    }

    function atShuffle() {
        setMoveId(0);
        setAllMove(true);
        setRedP(redPositions.at_shuffle);
        setBlueP(bluePositions.at_shuffle)
    }

    function atMiddle() {
        setMoveId(0);
        setAllMove(true);
        setRedP(redPositions.at_middle);
        setBlueP(bluePositions.at_middle);
    }

    function atPlay() {
        if (atWar === 'war-over') {
            setMoveId(idBeforeWar)
            setAtWar('')
        }


        setFlip(true)
        setAllMove(false);
        setRedP(redPositions.at_play);
        setBlueP(bluePositions.at_play)
        setMoveId((prevMov) => prevMov + 1);
    }
    function atBlueWin() {
        setFlip(false)
        setAllMove(false);
        setBlueP(bluePositions.at_win_stack);
        setRedP(redPositions.at_loss_stack);
    }
    function atRedWin() {
        setFlip(false)
        setAllMove(false);
        setRedP(redPositions.at_win_stack);
        setBlueP(bluePositions.at_loss_stack);
    }

    function atWarPlay() {
        setFlip(false)
        setAllMove(false);
        setRedP(redPositions.at_play);
        setBlueP(bluePositions.at_play)
        //setAtWar('war-started')
        setMoveId((prevMov) => prevMov + 1);
    }



    async function atRedWinWar() {

    }





    return (
        <div className={"h-full flex flex-col overflow-hidden "}>
            <div className="h-5/6 w-full bg-indigo-50  overflow-hidden relative transform-gpu">
                {redDeck(redP, moveId, allMove, flip)}
                {blueDeck(blueP, moveId, allMove, flip)}
            </div>
            <button onClick={() => atHand()}>atHand</button>
            <button onClick={() => atShuffle()}>atShuffle</button>
            <button onClick={() => atMiddle()}>atMiddle</button>
            <button onClick={() => atPlay()}>atPlay</button>
            <button onClick={() => atBlueWin()}>atBlueWin</button>
            <button onClick={() => atRedWin()}>atRedWin</button>
            <button onClick={() => { setAtWar('war-started'); setIdBeforeWar(moveId) }}>War Started</button>
            <button onClick={() => atWarPlay()}>At War Play</button>
            <button onClick={() => atRedWinWar()}>At Red Win</button>
            <button onClick={() => { setAtWar('war-over') }}>War Finished</button>
        </div>
    )


}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
