import React, { useState } from 'react';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import Gameboard from './components/Gameboard';
import Footer from './components/Footer';

import placeholder from './images/placeholder.jpg';

import './styles/reset.css';
import './styles/style.css';

export default function App() {
  const [gems, setGems] = useState([
    {
      name: 'amethyst',
      image: placeholder,
      clicked: false,
    },
    {
      name: 'diamond',
      image: placeholder,
      clicked: false,
    },
    {
      name: 'citrene',
      image: placeholder,
      clicked: false,
    },
    {
      name: 'emerald',
      image: placeholder,
      clicked: false,
    },
    {
      name: 'sapphire',
      image: placeholder,
      clicked: false,
    },
    {
      name: 'ruby',
      image: placeholder,
      clicked: false,
    },
    {
      name: 'tourmaline',
      image: placeholder,
      clicked: false,
    },
    {
      name: 'garnet',
      image: placeholder,
      clicked: false,
    },
    {
      name: 'opal',
      image: placeholder,
      clicked: false,
    },
  ]);

  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);

  return (
    <div>
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
