import React, { useState, useEffect } from 'react';
import { FaRobot } from 'react-icons/fa';

function MyBots() {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    const storedBots = JSON.parse(localStorage.getItem('bots')) || [];
    setBots(storedBots);
  }, []);

  return (
    <div className="my-bots">
      <FaRobot className="bot-icon" size={50}/>  
      <h2>My Bots</h2>
      {bots.length > 0 ? (
        <ul>
          {bots.map((bot, index) => (
            <li key={index}>{bot.name}</li>
          ))}
        </ul>
      ) : (
        <p>No bots created yet</p>
      )}
    </div>
  );
}

export default MyBots;