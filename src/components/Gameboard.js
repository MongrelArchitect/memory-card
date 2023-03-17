import React, { useEffect } from 'react';

export default function Gameboard({ gems, setGems }) {
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

  const randomizeArray = (array) => {
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

  useEffect(() => {
    // Randomize the gems on mount
    const gemsCopy = getGemsCopy(gems);
    const randomGems = randomizeArray(gemsCopy);
    setGems(randomGems);
  }, []);

  return (
    <div>
      <h2>Gameboard</h2>
      {gems.map((gem) => (
        <div className="gem" key={gems.indexOf(gem)}>
          <img src={gem.image} alt={gem.name} />
          <span>{gem.name}</span>
        </div>
      ))}
    </div>
  );
}
