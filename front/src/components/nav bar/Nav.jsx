import React from "react";

import './Nav.css'
import logo from '../../images/machok.gif'
import user from '../../images/user.png'

export const Nav = () => {
    return (
        <nav>
            <div className="nav-logo">
                <a href="/"><img src={logo} alt="MACHOK" className="navIcon"/></a>
            </div>
            <ul className="nav-links">
                <li><a href="./subjects">Subjects</a></li>
                <li><a href="./calendar">Calendar</a></li>
                <li><a href="#session">Session</a></li>
            </ul>
            <ul className="nav-account">
                <li><img src={user} alt="Icon" className="navIcon2"/><a href="#signUp">Sign up</a></li>
                <li><img src={user} alt="Icon" className="navIcon2"/><a href="#logIn">Log in</a></li>
            </ul>
        </nav>
    )
}