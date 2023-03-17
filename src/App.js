import React from 'react';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import Gameboard from './components/Gameboard';
import Footer from './components/Footer';
import './styles/reset.css';
import './styles/style.css';

export default function App() {
  return (
    <div>
      <Header />
      <Scoreboard />
      <Gameboard />
      <Footer />
    </div>
  );
}
