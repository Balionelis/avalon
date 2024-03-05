import React, { useRef } from 'react';
import '../styles/AboutProject.css';
import floor from '../images/floor.png'
import dirtbg from '../images/dirtbackground.png'

export default function AboutProject() {
  const spanRef = useRef(null);

  const copyTextToClipboard = () => {
    if (spanRef.current) {
      navigator.clipboard.writeText(spanRef.current.innerText);
      alert('You have successfully copied the IP address.');
    }
  };

  return (
    <div>
      <div className='floor'><img src={floor} alt='floor'/></div>
      <div className='background'><img src={dirtbg} alt='dirtbg'/></div>

      <div className='contents'>
        <h1 id='choose-text'>Choose how you play!</h1>
        <h1 id='explore-text'>Explore a vast and rich world with other players! 
          Forge your own path! No mods are required to play.</h1>
        <h1 id='how-to-join-text'>How to join:</h1>
        <ul id='how-to-join'>
          <li>Open your Minecraft: Java Edition client</li>
          <li>In "Multiplayer", click "Add Server"</li>
          <li>
            Enter <span id='bold-text' onClick={copyTextToClipboard} ref={spanRef}>play.avalon.com</span> for the IP
          </li>
          <li>Confirm and log in to start your adventure today!</li>
        </ul>
      </div>
    </div>
  );
}