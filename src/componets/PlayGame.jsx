import React, {Component} from 'react';
import _ from 'lodash';
import GameHeader from './GameHeader.jsx'
import GameBody from './GameBody.jsx';
import BeatTheClock from './BeatTheClock.jsx';
import GameResult from './GameResult.jsx';
import '../style/PlayGame.css';

class PlayGame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      players: [],
      result : {},
    }
  }
  setPlayerMode = list => {
    this.setState({players : list});
  }
  getResult = result => {
    this.setState({result});
  }
  resetState = confirm => {
    if(confirm === "Playagain"){
      this.setState({result : {}});
    }else{
      this.setState({
        players: [],
        result : {},
      });
    }
  }

  render(){
    return(
      <React.Fragment>
        <GameHeader/>
        {(this.state.players.length === 0 && _.isEmpty(this.state.result)) &&
          <GameBody onSelect = {this.setPlayerMode}/>
        }
        {
          (this.state.players.length > 0 && _.isEmpty(this.state.result)) &&
          <BeatTheClock players = {this.state.players} updateResult = {this.getResult}/>
        }
        {
          (!_.isEmpty(this.state.result)) && <GameResult result = {this.state.result} onResponse = {this.resetState}/>
        }
        
      </React.Fragment>
    )
  }
}

export default PlayGame;