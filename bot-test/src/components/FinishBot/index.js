import React from 'react';
import { FaRobot } from 'react-icons/fa';

function FinishBot({ botName }) {
  const handleClick = () => {
    const botData = { name: botName };
    const existingBots = JSON.parse(localStorage.getItem('bots')) || [];
    localStorage.setItem('bots', JSON.stringify([...existingBots, botData]));
    window.location.href = "/";
  };

  return (
    <div className="finish-bot">
      <FaRobot className="bot-icon" size={50}/>
      <h2>Congratulations!</h2>
      <p>You will receive an email shortly once your bot is ready.</p>
      <p>Stay tuned!</p>
      <button onClick={handleClick}>Done</button>
    </div>
  );
}

export default FinishBot;