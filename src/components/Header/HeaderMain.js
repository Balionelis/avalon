import React from 'react';
import '../styles/HeaderMain.css';
import homeimg from '../images/home.png';
import mapimg from '../images/map.png';
import sackimg from '../images/christmas-sack.png';

export default function Header() {
    return (
        <nav>
            <div className='head-box'></div>
            <div className='nav-buttons'>
                <a href='#'><img id='nav-home-img' alt='Home Image' src={homeimg} /><h2 id='nav-home-text'>Home</h2></a>
                <a href='#'><img id='nav-home-img' alt='Map Image' src={mapimg} /><h2 id='nav-home-text'>Map</h2></a>
                <a href='#'><img id='nav-home-img' alt='Sack Image' src={sackimg} /><h2 id='nav-home-text'>Shop</h2></a>
            </div>
        </nav>
    )
}