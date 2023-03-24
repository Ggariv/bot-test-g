import React, { useState } from 'react';
import Home from './components/Home';
import './App.css';

function App() {
  const [showBot, setShowBot] = useState(false);

  return (
    <div>
      <main>
        <div>
          {showBot ? (
            <Home onBotClick={() => setShowBot(false)} />
          ) : (
            <Home onBotClick={() => setShowBot(true)} />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;