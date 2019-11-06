import React, { Component } from 'react';
import _ from 'lodash';
import PlayerCard from '../common/PlayerCard.jsx';
import Clock from '../common/Clock.jsx';

class BeatTheClock extends Component {
  constructor(props) {
		super(props)
		this.symbols = ["rock" , "paper", "scissors"]
		this.state = {}
	}

  componentDidMount() {
    this.runGame();
  }

  runGame = () => {
		let counter = 100
		let myInterval = setInterval(() => {
      counter--
      if(this.props.players[0] === 'Player'){
        this.setState({
          player1: this.symbols[Math.floor(Math.random()*3)],
          winner: ""
        })
      }else{
        this.setState({
          player1: this.symbols[Math.floor(Math.random()*3)],
          player2: this.symbols[Math.floor(Math.random()*3)],
          winner: ""
        })
      }
			
			if(counter === 10) {
				clearInterval(myInterval)
				this.setState({winner: this.decideWinner()}, () => {
          this.props.updateResult(_.cloneDeep(this.state))
        })
			}
		},100)
  }

  onSelectCard = (value) => {
    this.setState({
      player2 : value
    })
  }

  decideWinner = ()=> {
		const {player1, player2} = this.state
		if(player1 == player2) {
			return "It's a draw !"
    }
    if(typeof(player2) === "undefined") {
      return `${this.props.players[1]} wins !`
    }
		if((player1==="rock" && player2==="scissors") ||
			(player1==="paper" && player2==="rock") ||
			(player1==="scissors" && player2==="paper")) {
			return `${this.props.players[1]} wins !`
		}
		return `${this.props.players[0]} wins !`
	}

  
  
  render() {
    return (
      <div className="container">
        <Clock deadline = {60} />
        <div><PlayerCard symbol={this.state.player1}/></div>
        <span className="vs-span">{this.props.players[1]}</span>
        <hr/>
        <span className="vs-span">{this.props.players[0]}</span>
        {
        (this.props.players[0] === 'Player') 
          ? <div>Choose Your Move <PlayerCard defaultLoad = {true} onSelect = {this.onSelectCard} /> </div> 
          : <div><PlayerCard symbol={this.state.player2}/></div>
        }
      </div>
    )
  };
}

export default BeatTheClock;
