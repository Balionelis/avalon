import React, { createContext, useState, useEffect } from 'react';

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [playersNow, setPlayersNow] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.mcstatus.io/v2/status/java/77.221.90.219:28565');
      const data = await response.json();
      if (data.players) {
        setPlayersNow(data.players.online);
      }
    };

    fetchData();
  }, []);

  return (
    <PlayerContext.Provider value={{ playersNow, setPlayersNow }}>
      {children}
    </PlayerContext.Provider>
  );
};