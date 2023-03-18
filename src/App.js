import React, { useState } from 'react';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import Gameboard from './components/Gameboard';
import Footer from './components/Footer';

import alexandrite from './images/alexandrite.png';
import amber from './images/amber.png';
import amethyst from './images/amethyst.png';
import ammolite from './images/ammolite.png';
import aquamarine from './images/aquamarine.png';
import citrene from './images/citrene.png';
import diamond from './images/diamond.png';
import emerald from './images/emerald.png';
import garnet from './images/garnet.png';
import lapis from './images/lapis.png';
import opal from './images/opal.png';
import pearl from './images/pearl.png';
import ruby from './images/ruby.png';
import sapphire from './images/sapphire.png';
import tanzanite from './images/tanzanite.png';
import topaz from './images/topaz.png';
import tourmaline from './images/tourmaline.png';
import turquoise from './images/turquoise.png';

import './styles/reset.css';
import './styles/style.css';

export default function App() {
  const [gems, setGems] = useState([
    {
      name: 'amethyst',
      image: amethyst,
      clicked: false,
    },
    {
      name: 'diamond',
      image: diamond,
      clicked: false,
    },
    {
      name: 'citrene',
      image: citrene,
      clicked: false,
    },
    {
      name: 'emerald',
      image: emerald,
      clicked: false,
    },
    {
      name: 'sapphire',
      image: sapphire,
      clicked: false,
    },
    {
      name: 'ruby',
      image: ruby,
      clicked: false,
    },
    {
      name: 'tourmaline',
      image: tourmaline,
      clicked: false,
    },
    {
      name: 'garnet',
      image: garnet,
      clicked: false,
    },
    {
      name: 'opal',
      image: opal,
      clicked: false,
    },
    {
      name: 'topaz',
      image: topaz,
      clicked: false,
    },
    {
      name: 'alexandrite',
      image: alexandrite,
      clicked: false,
    },
    {
      name: 'tanzanite',
      image: tanzanite,
      clicked: false,
    },
    {
      name: 'amber',
      image: amber,
      clicked: false,
    },
    {
      name: 'aquamarine',
      image: aquamarine,
      clicked: false,
    },
    {
      name: 'pearl',
      image: pearl,
      clicked: false,
    },
    {
      name: 'lapis lazuli',
      image: lapis,
      clicked: false,
    },
    {
      name: 'turquoise',
      image: turquoise,
      clicked: false,
    },
    {
      name: 'ammolite',
      image: ammolite,
      clicked: false,
    },
  ]);

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
