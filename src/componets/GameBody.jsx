import React, { Component } from 'react';
import PlayerCard from '../common/PlayerCard.jsx';

class GameBody extends Component {
    
  render() {
    return (
      <div className="container">
        <div className="default-home">
          <span>Select Play Mode</span>
        </div>
        <button
          className="select-button"
          onClick= {() => this.props.onSelect(['Player', 'Computer'])}
          >
          Player Vs Computer
        </button>
        <button
          className="select-button"
          onClick= {() => this.props.onSelect(['Computer 1', 'Computer 2'])}
          >
          Computer Vs Computer
        </button>
        <PlayerCard defaultLoad='load' />
      </div>
    )
  };
}

export default GameBody;
