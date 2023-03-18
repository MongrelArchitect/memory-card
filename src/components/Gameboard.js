import React, { useEffect } from 'react';

export default function Gameboard({
  gems,
  setGems,
  score,
  setScore,
  best,
  setBest,
}) {
  const getGemsCopy = () => {
    const tempGems = [];
    gems.forEach((gem) => {
      const gemCopy = {};
      Object.keys(gem).forEach((key) => {
        gemCopy[key] = gem[key];
      });
      tempGems.push(gemCopy);
    });
    return tempGems;
  };

  const shuffleGems = (array) => {
    const randomized = [];
    const tried = [];
    let i = 0;
    while (randomized.length !== array.length) {
      const tryIndex = Math.floor(Math.random() * array.length);
      if (!tried.includes(tryIndex)) {
        tried.push(tryIndex);
        randomized[i] = array[tryIndex];
        i += 1;
      }
    }
    return randomized;
  };

  const clearClicked = (array) => {
    const cleared = [];
    array.forEach((gem) => {
      const clearGem = { ...gem };
      clearGem.clicked = false;
      cleared.push(clearGem);
    });
    return cleared;
  };

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
          data-key={gems.indexOf(gem)}
          key={gems.indexOf(gem)}
          onClick={clickGem}
          onKeyDown={clickGem}
          role="button"
          tabIndex={0}
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
