import React from 'react';

export default function Grayout({ setScore, setBest, gameOver }) {
  if (gameOver) {
    return (
      <div className="grayout">
        <div>
          <h2>Game over!</h2>
          <button
            type="button"
            onClick={() => {
              setScore(0);
              setBest(0);
            }}
          >
            RESET
          </button>
        </div>
      </div>
    );
  }
  return null;
}
