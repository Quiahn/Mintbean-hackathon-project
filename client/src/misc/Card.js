import React from 'react'
import { useSpring, animated } from 'react-spring'
import CardFaces from './cardFaces'
import backImg from '../icons/card-back-v2.jpg'


// 0-Enemy Deck
// 1-Enemy Win Stack
// 2-Enemy Play
// 3-Player Deck
// 4-Players Win Stack
// 5-Player's Play
// 6-Shuffle
// 7-War Deck
const posArr = [
    { top: `10%`, left: `60%`, "filter": "brightness(100%) " },
    { top: `10%`, left: `10%`, "filter": "brightness(50%) " },
    { top: `50%`, left: `40%`, "filter": "brightness(100%) " },
    { top: `90%`, left: `60%`, "filter": "brightness(100%) " },
    { top: `90%`, left: `10%`, "filter": "brightness(50%) " },
    { top: `50%`, left: `60%`, "filter": "brightness(100%) " },
    { top: `50%`, left: `90%`, "filter": "brightness(100%) " },
    { top: `50%`, left: `10%`, "filter": "brightness(100%) " },
]

export default function Card({ pos, cardId }) {

    const props = useSpring({
        to: { ...posArr[pos], transform: `translate(-50%, -50%) rotate(${Math.random() * 40 - 20}deg)` }
    })

    const flip = pos === 2 || pos === 5

    return (
        <animated.div className={`game-card absolute ${flip ? 'z-50' : ''}`} style={props}>
            <animated.img src={CardFaces[cardId]} className="absolute" style={{
                transform: `perspective(600px) rotateY(${flip ? 180 : 0}deg) scaleX(${flip ? -1 : 1})`,
                zIndex: 0 + flip,
                transition: `transform 0.5s`
            }}></animated.img>
            <animated.img src={backImg} className="absolute" style={{
                transform: `perspective(600px) rotateY(${flip ? 0 : 180}deg) scaleX(${flip ? 1 : -1})`,
                zIndex: 0 + !flip,
                transition: `transform 0.5s`
            }}></animated.img>
        </animated.div>
    )
}