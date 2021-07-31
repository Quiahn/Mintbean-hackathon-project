import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import lgLogo from './../img/card-wars-logo-lg.png'
export default function Home() {
    

    return (
        <Parallax pages={2} style={{ top: '0', left: '0' }}>
            <ParallaxLayer className="flex bg-gradient-to-b from-yellow-600 via-yellow-400 justify-center items-center"
                offset={0}
                speed={5}
            >
                <img src={lgLogo} alt="Card Wars Logo" />
                <p>Scroll down</p>
            </ParallaxLayer>

            <ParallaxLayer className="flex bg-indigo-100 justify-center items-center text-center"
                offset={1}
                speed={5}
            >
                <p>Scroll up</p>
            </ParallaxLayer>
        </Parallax>
    )
}
