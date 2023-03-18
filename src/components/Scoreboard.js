import React from 'react';

export default function Scoreboard({ score, best, max }) {
  return (
    <div className="scoreboard">
      <h2>SCORE</h2>
      <div>
        <span>
          Current:
          <span className="score">
            {score}
          </span>
        </span>
        <span>
          Best:
          <span className="score">
            {best}
            /
            {max}
          </span>
        </span>
      </div>
    </div>
  );
}
