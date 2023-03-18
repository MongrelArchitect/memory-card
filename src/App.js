import React, { useState } from 'react';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import Gameboard from './components/Gameboard';
import Footer from './components/Footer';

import './styles/reset.css';
import './styles/style.css';

import gemstones from './components/Gems';

export default function App() {
  const [gems, setGems] = useState(gemstones);

  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);

  return (
    <div className="container">
      <Header />
      <Scoreboard score={score} best={best} max={gems.length} />
      <Gameboard
        gems={gems}
        setGems={setGems}
        score={score}
        setScore={setScore}
        best={best}
        setBest={setBest}
      />
      <Footer />
    </div>
  );
}
