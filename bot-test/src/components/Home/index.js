import React, { useState } from 'react';
import { FaHome, FaRobot } from 'react-icons/fa';
import ConfigureBot from '../Bot';

function Home() {
  const [showConfigureBot, setShowConfigureBot] = useState(false);
  const [numBots, setNumBots] = useState(0);

  const handleConfigureBotClick = () => {
    setShowConfigureBot(true);
  };

  const handleConfigureBotCancel = () => {
    setShowConfigureBot(false);
  };

  const handleConfigureBotSubmit = (data) => {
    setNumBots(numBots + 1);
    setShowConfigureBot(false);
  };

  const handleReset = () => {
    setShowConfigureBot(false);
    setNumBots(0);
  };

  return (
    <>
      <nav>
        <a href="/">
          <FaHome size={30} />
        </a>
        <a href="/mybots">
          <FaRobot size={30} />
        </a>
      </nav>
      <div className="home">
        {numBots === 0 && !showConfigureBot && (
          <>
            <FaRobot className="bot-icon" size={50}/>
            <h1>You don't have any bots yet</h1>
            <p>Please create your first bot to be able to work with the system.</p>
            <button className="add-bot-button" onClick={handleConfigureBotClick}>Add Bot</button>
          </>
        )}
        {numBots > 0 && !showConfigureBot &&(
          <>
            <h1>You have {numBots} bots created</h1>
            <button className="add-bot-button" onClick={handleConfigureBotClick}>Add Bot</button>
          </>
        )}
        {showConfigureBot && (
          <ConfigureBot
            onCancel={handleConfigureBotCancel}
            onSubmit={handleConfigureBotSubmit}
            onReset={handleReset}
          />
        )}
      </div>
    </>
  );
}

export default Home;