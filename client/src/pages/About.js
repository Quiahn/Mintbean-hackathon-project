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

    useEffect(() => {
        if (moveId > 26) {
            setAllMove(true)
            setMoveId(0)
            setRedP(redPositions.at_middle)
            setBlueP(bluePositions.at_middle)
        }
        setAllMove(false)
    }, [moveId])

    function atHand() {
        setMoveId(0);
        setAllMove(true);
        setRedP(redPositions.at_hand);
        setBlueP(bluePositions.at_hand)
    }

    function atShuffle(params) {
        setMoveId(0);
        setAllMove(true);
        setRedP(redPositions.at_shuffle);
        setBlueP(bluePositions.at_shuffle)
    }

    function atMiddle(params) {
        setMoveId(0);
        setAllMove(true);
        setRedP(redPositions.at_middle);
        setBlueP(bluePositions.at_middle);
    }

    function atPlay(params) {
        setMoveId((moveId) => moveId + 1);
        setAllMove(false);
        setRedP(redPositions.at_play);
        setBlueP(bluePositions.at_play)
    }
    function atBlueWin(params) {
        setAllMove(false);
        setRedP(redPositions.at_loss_stack);
        setBlueP(bluePositions.at_win_stack);
    }
    function atRenWin(params) {
        setAllMove(false);
        setRedP(redPositions.at_win_stack);
        setBlueP(bluePositions.at_loss_stack);
    }





    return (
        <div className={"h-full flex flex-col overflow-hidden "}>
            <div className="h-5/6 w-full bg-indigo-50  overflow-hidden relative">
                {redDeck(redP, moveId, allMove, flip)}
                {blueDeck(blueP, moveId, allMove, flip)}
            </div>
            <button onClick={() => atHand()}>atHand</button>
            <button onClick={() => atShuffle()}>atShuffle</button>
            <button onClick={() => atMiddle()}>atMiddle</button>
            <button onClick={() => atPlay()}>atPlay</button>
            <button onClick={() => atBlueWin()}>atBlueWin</button>
            <button onClick={() => atRenWin()}>atRedWin</button>
        </div>
    )
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
