import React, { useState, useEffect } from 'react';
import Grayout from './components/Grayout';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import Gameboard from './components/Gameboard';
import Footer from './components/Footer';

import './styles/reset.css';
import './styles/style.css';

import {
  gemstones,
  clearClicked,
  getGemsCopy,
  shuffleGems,
} from './components/Gems';

export default function App() {
  const [gems, setGems] = useState(gemstones);

  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);

  useEffect(() => {
    if (score === gems.length) {
      setBest(score);
      // setScore(0);
      setGems(clearClicked(getGemsCopy(gems)));
    }
  }, [score]);

  useEffect(() => {
    setGems(shuffleGems(getGemsCopy(gems)));
  }, []);

  return (
    <div className="container">
      <Grayout
        setScore={setScore}
        setBest={setBest}
        gameOver={score === gems.length}
      />
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
