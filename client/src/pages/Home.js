import React, { useState } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import lgLogo from './../img/card-wars-logo-lg.png'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faAngleDown, faAngleUp } from '@fortawesome/fontawesome-free-solid'

export default function Home() {
    const [signedin, setSignedIn] = useState(false)

    return (
        <Parallax pages={2} style={{ top: '0', left: '0' }}>
            <ParallaxLayer className="flex bg-gradient-to-b from-yellow-600 via-yellow-400 justify-center items-center"
                offset={0}
                speed={5}
            >
                <img src={lgLogo} alt="Card Wars Logo" className="absolute flex top-56 left-50" />
                <div className="absolute flex bottom-20 left-50">
                    SCROLL
                </div>
                <button className="absolute flex bottom-44 lg:bottom-64 left-50 bg-white text-xl text-black font-bold hover:text-black py-2 px-4 border border-white rounded" href="#">Play!</button>
            </ParallaxLayer>

            <ParallaxLayer className="flex bg-gradient-to-t from-indigo-900 via-indigo-600 justify-center items-center"
                offset={1}
                speed={5}
            >
                <div className="absolute flex top-20 left-50">
                    SCROLL
                </div>
                <div class="flex-col text-center w-11/12">
                    <h1 className="text-5xl font-medium text-white pb-10">How To Start</h1>
                    <p className="text-3xl font-medium text-white pb-20">First you have to <span className="underline" >create an account</span>. If
                        you have an account then <a className="underline" href="/about">log in</a>.</p>
                    <h1 className="text-5xl font-medium text-white pb-10">How To Play</h1>
                    {/* <p className="text-3xl font-medium text-white">Each player puts a card down on the board at the same time and the player with the higher card takes both cards. <br /> If both player's cards are the same rank then it is War. Each player puts down three cards face down and one card face up. The player with the higher card faced up takes both piles. <br /> the player that has the most cards when the pile runs out wins.</p> */}
                    <div className="flex justify-center">
                        <ul className="list-disc text-3xl font-medium text-white w-6/12 ">
                            <li className="p-4">Each player puts a card down on the board at the same time and the player with the higher card takes both cards.</li>
                            <li className="p-4">If both player's cards are the same rank then it is War. Each player puts down three cards face down and one card face up. The player with the higher card faced up takes both piles.</li>
                            <li className="p-4">the player that has the most cards when the pile runs out wins.</li>
                        </ul>
                    </div>
                </div>
            </ParallaxLayer>
        </Parallax>
    )
}
