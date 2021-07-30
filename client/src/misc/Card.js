import React, { useState, useEffect } from 'react'
import { useSpring, animated, config } from 'react-spring'



export default function Card({ cardPos, isRed, cardFlip }) {

    const [cardPositon, setCardPositon] = useState(cardPos)
    const [red, setRed] = useState(isRed)
    const [flip, setFlip] = useState(cardFlip)

    const props = useSpring({
        to: { ...cardPositon, transform: `rotate(${getRandomInt(-20, 20)}deg) translate(-50%, -50%)`, },
        config: config.stiff,
    })

    useEffect(() => {
        setCardPositon(cardPos)
    }, [cardPos, isRed, cardFlip])

    return (
        <animated.div style={props} className={`h-32 w-24 lg:h-52 lg:w-32 absolute origin-center ${(red) ? ` bg-red-300` : `bg-blue-300`}`} >
            <br />
        </animated.div>
    )
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}