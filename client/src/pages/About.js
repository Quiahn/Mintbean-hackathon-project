import React, { useState } from 'react'
import Card from '../misc/Card';


const bluePositions = {
    at_hand: { top: `100%`, left: `60%` },
    at_play: { top: `50%`, left: `60%` },
    at_win_stack: { top: `100%`, left: `15%` },
    at_loss_stack: { top: `0%`, left: `70%` },
    at_shuffle: { top: `50%`, left: `10%` },

}



const redPositions = {
    at_hand: { top: `0%`, left: `40%` },
    at_play: { top: `50%`, left: `40%` },
    at_win_stack: { top: `0%`, left: `70%` },
    at_loss_stack: { top: `100%`, left: `15%` },
    at_shuffle: { top: `50%`, left: `10%` },
}



export default function About() {
    const [redP, setRedP] = useState(redPositions.at_hand)
    const [blueP, setBlueP] = useState(bluePositions.at_hand)
    return (
        <div className={"h-full flex flex-col overflow-hidden "}>
            <div className="h-5/6 w-full bg-indigo-50  overflow-hidden relative">
                <Card cardPos={redP} isRed={true}></Card>
                <Card cardPos={blueP} isRed={false}></Card>
            </div>
            <button onClick={() => setRedP(redPositions.at_hand)}>At hand</button>
            <button onClick={() => setRedP(redPositions.at_play)}>At Play</button>
            <button onClick={() => setRedP(redPositions.at_loss_stack)}>At Loss</button>
            <button onClick={() => setRedP(redPositions.at_win_stack)}>At Win</button>
            <button onClick={() => setRedP(redPositions.at_shuffle)}>At Shuffle</button>
        </div>
    )
}
