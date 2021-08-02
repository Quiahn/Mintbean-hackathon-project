import React from 'react'
import { useSpring, animated } from 'react-spring'
import CardFaces from './cardFaces'
import backImg from '../icons/card-back-v2.jpg'

export default function TestCard({ flip, cardId, pos, isPlaying }) {

    const porps = useSpring({
        to: { ...pos, transform: `translate(-50%, -50%) rotateZ(-10deg)  rotate(${isPlaying ? (Math.random() * 60 - 30) : -8}deg)` }
    })

    const { transform, opacity } = useSpring({
        opacity: !flip ? 1 : 0,
        transform: `perspective(600px) rotateY(${!flip ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 }
    })

    return (
        <animated.div className={`game-card absolute z-10`} style={porps}>
            <animated.img src={CardFaces[cardId]} className="absolute" style={{ opacity: opacity.to(o => 1 - o), transform }} />
            <animated.img src={backImg} className="absolute" style={{ opacity, transform: transform.to(t => `${t} rotateY(180deg)`) }}></animated.img>
        </animated.div>
    )
}


