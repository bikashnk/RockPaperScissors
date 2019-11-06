import React from 'react';

const PlayerCard = ({color, symbol, defaultLoad, onSelect })=> {
	const style = {
		backgroundColor: color || 'white',
    backgroundImage: "url(http://storage.js-craft.io/examples/rps/" + symbol + ".png)"
  }

const OnCardSelect = (card, id) => {
  onSelect(card);
  ["rock", "paper", "scissors"].map((img, index) => {
    if(id === index){
      document.getElementById(id).style.backgroundColor = 'green';
    }else{
      document.getElementById(index).style.backgroundColor = 'white';
    }
  })
}

  const renderDefault = () =>
    ["rock", "paper", "scissors"].map((img, index) =>
      (<div className="column" 
      key={index}>
      <span
        id={index}
        style={{ backgroundColor: style.backgroundColor, 
          width:"80%", 
          backgroundImage: "url(http://storage.js-craft.io/examples/rps/" + img + ".png)",
          cursor : (onSelect) ? 'pointer' : ''
        
        }}
        className="player-card" 
        onClick = {(onSelect) ? () =>  OnCardSelect(img, index) : '' }
        />
      </div>
      )
    )
	return(
    <React.Fragment>
      {
        (defaultLoad) ? <div className="row">{renderDefault()}</div>
        :
        <div style = { style} className="player-card"/>
      }
      
    </React.Fragment>
		
	)
}

export default PlayerCard;