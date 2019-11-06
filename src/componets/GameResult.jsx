import React from 'react';
import PlayerCard from '../common/PlayerCard.jsx';

const GameResult = ({ result, onResponse }) => {
  return (
    <div className="container">
      <div><PlayerCard symbol={result.player1} /></div>
      <span className="vs-span">{result.winner}</span>
      <div className="row">
        <div className="offset-sm-2 col-sm-4">
          <button
            className="btn btn-primary btn-md select-button"
            style={{ display: 'inline-block', width : "100%" }}
            onClick = {() => onResponse("Playagain")}
            >
            Play again!
        </button>
        </div>
        <div className="col-sm-4">
          <button
            className="btn btn-primary btn-md select-button"
            style={{ display: 'inline-block', width : "100%" }}
            onClick = {() => onResponse("Changemode")}
            >
            Changemode
        </button>
        </div>
      </div>
      <div><PlayerCard symbol={result.player2} /></div>
    </div>
  )
}

export default GameResult;

