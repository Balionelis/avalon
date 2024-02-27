import React from 'react';
import Header from './components/Header/HeaderMain';
import MainBody from './components/Body/MainBody';
import { PlayerProvider } from './components/Api/PlayerContext';

function App() {
    return (
      <PlayerProvider>
        <Header />
        <MainBody />
      </PlayerProvider>
    );
  }
  
  export default App;