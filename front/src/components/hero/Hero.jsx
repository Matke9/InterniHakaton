import React from "react";

import './Hero.css'
import machok from '../../images/machok.gif'

export const Hero = () => {
    return(
        <div className="hero">
            <div className="hero-machok">
                <img src={machok} alt="MACHOK" />
            </div>

            <div className="hero-tekst">
                <h1>LEARN WITH MACHOK</h1>
                <p>Learn with Machok is a web platform for easier preparation for FON exams!!!</p>
                <p>TRUST THE MACHOK</p>
            </div>
        </div>
    )
}