import React from 'react'
import { useSpring, animated, config } from 'react-spring'
import backImg from '../icons/card-back-v2.jpg'
import clubs2 from '../icons/c-2.jpg'

//Hearts
//Clubs
//Spades
//Diamonds

export default function Card({ cardPos, cardFlip, rotation, id, moveId, allMove, onAnimationRest }) {
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
        transform: (moveId === id) ? `perspective(600px) rotateY(${cardFlip ? 180 : 0}deg)` : null,
        config: { mass: 5, tension: 500, friction: 80 },

    })

    return (
        <animated.div style={props} className="game-card absolute rotation-center-card transform-gpu" >

            <animated.img src={clubs2} className="absolute" alt="Back"
                style={(opacity) ? { opacity: opacity.to(o => 1 - o), transform } : null}
            />
            <animated.img src={backImg} className="absolute" alt="Back"
                style={{
                    opacity,
                    transform,
                    rotateY: '180deg',
                }}
            />

        </animated.div>
    )
}
