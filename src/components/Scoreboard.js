import React from 'react';

export default function Scoreboard({ score, best }) {
  return (
    <div>
      <h2>Scoreboard</h2>
      <span>
        Current:
        {score}
      </span>
      <span>
        Best:
        {best}
      </span>
    </div>
  );
}
