import React from 'react'
import { useSpring, animated, config } from 'react-spring'
import backImg from '../icons/card-back-v2.jpg'


//Hearts
//Clubs
//Spades
//Diamonds
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

export default function Card({ cardPos, isRed, cardFlip, rotation, id, moveId, allMove, url }) {

    const props = useSpring({
        to: (allMove || (moveId === id)) ? {
            ...getPos(cardPos, isRed),
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


function getPos(name, isRed) {
    let position = null
    switch (name) {
        case 'at_hand':
            position = (isRed) ? redPositions.at_hand : bluePositions.at_hand
            break;
        case 'at_play':
            position = (isRed) ? redPositions.at_play : bluePositions.at_play
            break;
        case 'at_win':
            position = (isRed) ? redPositions.at_win_stack : bluePositions.at_win_stack
            break;
        case 'at_loss':
            position = (isRed) ? redPositions.at_loss_stack : bluePositions.at_loss_stack
            break;
        case 'at_shuffle':
            position = (isRed) ? redPositions.at_shuffle : bluePositions.at_shuffle
            break;
        default:
            position = (isRed) ? redPositions.at_middle : bluePositions.at_middle
            break;
    }
}