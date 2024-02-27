import React, { useContext } from 'react';
import '../styles/MainBody.css';
import backgroud from '../images/image.png';
import logo from '../images/logo.png';
import line from '../images/line.png';
import { PlayerContext } from '../Api/PlayerContext';

export default function MainBody() {
  const { playersNow } = useContext(PlayerContext);

  return (
    <div>
      <img id='bg-picture' src={backgroud} />
      <div className='middle-content'>
            <img id='logo' src={logo} />
            <h1 id='mid-text'>The Minecraft SANDBOX MMORPG</h1>
            <img id='line' src={line} />
            <h2 id='mid-text2'>play.avalon.com - <span id='bold-number'>{playersNow}</span> Players Online</h2>
            <button id='play-button'>BEGIN YOUR JOURNEY</button>
      </div>
    </div>
  );
}