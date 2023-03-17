import React from 'react';

export default function Gameboard({ gems }) {
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
