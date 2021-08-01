import React from 'react'
import { useSpring, animated, config } from 'react-spring'
import backImg from '../icons/card-back-v2.jpg'


//Hearts
//Clubs
//Spades
//Diamonds

export default function Card({ cardPos, cardFlip, rotation, id, moveId, allMove, url }) {
    const props = useSpring({
        to: (allMove || (moveId === id)) ? {
            ...cardPos,
            transformOrigin: "center, center",
            transform: `rotate(${rotation}deg) translate(-50%, -50%)`,
        } : null,
        config: config.stiff,
    })

    const { transform, opacity } = useSpring({
        opacity: (moveId === id) ? (cardFlip ? 0 : 1) : null,
        transform: (moveId === id) ? `perspective(600px) rotateY(${cardFlip ? 0 : 180}deg) scaleX(${cardFlip ? 1 : -1})` : null,
        config: { mass: 5, tension: 500, friction: 80 },
    })

    return (
        <animated.div style={props} className={`game-card absolute rotation-center-card transform-gpu ${id === moveId ? 'z-50' : 'z-10'}`} >

            <animated.img src={url} className="absolute" alt="Back"
                style={(opacity) ? { opacity: opacity.to(o => 1 - o), transform } : null}
            />
            <animated.img src={backImg} className="absolute " alt="Back"
                style={{
                    opacity,
                    transform,
                    rotateY: '0deg',
                }}
            />

        </animated.div>
    )
}
