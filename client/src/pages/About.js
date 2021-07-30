import React, { useState, useEffect } from 'react'
import { useSpring, animated, config } from 'react-spring'


const bluePositions = {
    at_hand: { top: `90%`, left: `60%`, transform: 'rotate(10deg)' },
    at_play: { top: `45%`, left: `60%`, transform: 'rotate(-10deg)' },
    at_win_stack: { top: `90%`, left: `15%`, transform: 'rotate(-310deg)' },
    at_loss_stack: { top: `-5%`, left: `70%`, transform: 'rotate(0deg)' },
    at_shuffle: { top: `40%`, left: `10%`, transform: 'rotate(350deg)' },

}



const redPositions = {
    at_hand: { top: `-6%`, left: `40%`, transform: 'rotate(-8deg)' },
    at_play: { top: `45%`, left: `40%`, transform: 'rotate(10deg)' },
    at_win_stack: { top: `-5%`, left: `70%`, transform: 'rotate(0deg)' },
    at_loss_stack: { top: `90%`, left: `15%`, transform: 'rotate(-310deg)' },
    at_shuffle: { top: `40%`, left: `10%`, transform: 'rotate(350deg)' },
}


export default function About() {

    const [cardBlue, setCardBlue] = useState(bluePositions.at_hand)
    const [cardRed, setCardRed] = useState(redPositions.at_hand)
    const [flip, setFlip] = useState(true)

    console.log(cardBlue)
    const props = useSpring({
        to: { ...cardBlue, transform: `rotate(${getRandomInt(-20, 20)}deg)` },
        config: config.stiff,
    })
    const props2 = useSpring({
        to: { ...cardRed, transform: `rotate(${getRandomInt(-20, 20)}deg)` },
        config: config.stiff,

    })



    return (
        <div className="h-full w-full bg-dark-300">
            <div className={"h-full flex flex-col "}>
                <div className="h-full w-full bg-green-100  overflow-hidden relative">
                    <animated.div style={props} className="h-32 w-24 lg:h-52 lg:w-32 bg-blue-200 absolute " >
                        <br />
                    </animated.div>
                    <animated.div style={props2} className="h-32 w-24 lg:h-52 lg:w-32 bg-red-200 absolute ">
                        <br />
                    </animated.div>
                </div>
                <button onClick={() => { setCardRed(redPositions.at_hand); setCardBlue(bluePositions.at_hand) }}>At Hand</button>
                <button onClick={() => { setCardRed(redPositions.at_play); setCardBlue(bluePositions.at_play) }}>At Play</button>
                <button onClick={() => { setCardRed(redPositions.at_loss_stack); setCardBlue(bluePositions.at_win_stack) }}>At Blue Win Stack</button>
                <button onClick={() => { setCardRed(redPositions.at_win_stack); setCardBlue(bluePositions.at_loss_stack) }}>At Red Win Stack</button>
                <button onClick={() => { setCardRed(redPositions.at_shuffle); setCardBlue(bluePositions.at_shuffle) }}>At Shuffle</button>
            </div>
        </div>
    )
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}