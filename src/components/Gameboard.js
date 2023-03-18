import React, { useEffect } from 'react';

import {
  getGemsCopy, shuffleGems, clearClicked,
} from './Gems';

export default function Gameboard({
  gems,
  setGems,
  score,
  setScore,
  best,
  setBest,
}) {
  const clickGem = (event) => {
    const key = +event.target.dataset.key;
    let gemsCopy = getGemsCopy(gems);
    if (!gems[key].clicked) {
      gemsCopy[key].clicked = true;
      setScore(score + 1);
    } else {
      if (score > best) {
        setBest(score);
      }
      setScore(0);
      gemsCopy = clearClicked(gemsCopy);
    }
    setGems(shuffleGems(gemsCopy));
  };

  useEffect(() => {
    if (score === gems.length) {
      setBest(score);
      setScore(0);
      setGems(clearClicked(getGemsCopy(gems)));
      alert('game over');
    }
  }, [score]);

  useEffect(() => {
    setGems(shuffleGems(getGemsCopy(gems)));
  }, []);

  return (
    <div className="gems">
      {gems.map((gem) => (
        <div
          className="gem"
          key={gems.indexOf(gem)}
          style={{
            background: `center/90% no-repeat #f1eee9 url(${gem.image})`,
          }}
        >
          <button data-key={gems.indexOf(gem)} onClick={clickGem} type="button">
            {gem.name}
          </button>
          {/*
            <span>
              clicked:
              {gem.clicked ? 'YES' : 'no'}
            </span>
            */}
        </div>
      ))}
    </div>
  );
}
