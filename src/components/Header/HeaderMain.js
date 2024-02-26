import React from 'react';
import '../styles/HeaderMain.css';
import homeimg from '../images/home.png';

export default function Header() {
    return (
        <nav>
            <div className='head-box'></div>
            <div className='nav-buttons'>
                <a href='#'><img id='nav-home-img' alt='Home Image' src={homeimg} /><h2 id='nav-home-text'>Home</h2></a>
            </div>
        </nav>
    )
}