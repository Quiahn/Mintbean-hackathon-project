import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import lgLogo from './../img/card-wars-logo-lg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/fontawesome-free-solid'


export default function Home() {
        return (
            <Parallax pages={2} style={{ top: '0', left: '0' }}>
                <ParallaxLayer className="flex bg-gradient-to-b from-yellow-600 via-yellow-400 justify-center items-center"
                    offset={0}
                    speed={5}
                >
                    <img src={lgLogo} alt="Card Wars Logo" className="absolute flex top-56 left-50" />
                    <div className="absolute flex bottom-20 left-50">
                        <FontAwesomeIcon icon={faAngleDown}
                        className="scroll" />
                    </div>
                    <button className="absolute flex bottom-80 left-50 bg-transparent text-lg hover:bg-white text-black font-bold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded">Play!</button>
                </ParallaxLayer>

                <ParallaxLayer className="flex bg-gradient-to-t from-indigo-700 via-indigo-400 justify-center items-center"
                    offset={1}
                    speed={5}
                >
                    <div className="absolute flex top-20 left-50">
                        <FontAwesomeIcon icon={faAngleUp}
                        className="scroll" />
                    </div>
                    <h1 className="text-5xl font-medium text-white">How To Start</h1>
                    <p className="text-5xl font-medium text-white">First you have to <a className="underline" href="#">create an account</a>. If 
                    you have an account then <a className="underline" href="/about">log in</a>.</p>
                    <h1 className="text-5xl font-medium text-white">How To Play</h1>
                    <p className="text-5xl font-medium text-white">Each player puts a card down on the board at the same time and the player with the higher card takes both cards.</p>
                </ParallaxLayer>
            </Parallax>
        )
    }
