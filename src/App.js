import React from 'react';
import Header from './components/Header/HeaderMain';
import MainBody from './components/Body/MainBody';
import AboutProject from './components/About/AboutProject'
import { PlayerProvider } from './components/Api/PlayerContext';

function App() {
    return (
      <PlayerProvider>
        <Header />
        <MainBody />
        <AboutProject />
      </PlayerProvider>
    );
  }
  
  export default App;