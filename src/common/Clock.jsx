import React, { Component } from 'react';
import _ from 'lodash';
import '../style/Clock.css'; 

const zerofill = num => ((num < 10 && num >= 0) ? `0${num}` : num);

const SvgCircle = (props) => {
  const { className, done, max, radius, stroke, strokeWidth } = props
  const size = (radius + strokeWidth) * 2
  const length = Math.ceil(2 * radius * Math.PI)
  const remainingLength = length - (Math.ceil(2 * radius * Math.PI) * (done / max))
  return (
    <svg 
      className={className}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <circle 
          className="circle"
          r={radius}
          cx={radius + strokeWidth} 
          cy={radius + strokeWidth} 
          stroke={stroke}
          strokeDasharray={length}
          strokeDashoffset={remainingLength}
          strokeLinecap="round"
          strokeWidth={strokeWidth}
          fill="none" 
        />
        <circle 
          className="circle--bg"
          r={radius} 
          cx={radius + strokeWidth}
          cy={radius + strokeWidth} 
          stroke="rgba(0, 0, 0, .1)"
          strokeLinecap="round"
          strokeWidth={strokeWidth} 
          fill="none" 
        />
      </g>
    </svg>
  )
}

SvgCircle.defaultProps = {
  done: 0,
  max: 24,
  radius: 72,
  stroke: '#e91e63',
  strokeWidth: 8,
}

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
    }
  }
  
  componentDidMount() {
    this.runClock();
  }

  runClock = () => {
		let counter = _.cloneDeep(this.props.deadline);
		let myInterval = setInterval(() => {
			counter--
			if(counter === 0) {
				clearInterval(myInterval)
      }
      const seconds = counter;
      this.setState({seconds })
		},150)
	}
  
  render() {
    return (
      <div className="clock">
        
        <div className="clock__display">
          <SvgCircle max={60} done={this.state.seconds} />
          <div className="clock__text clock__text--seconds">
            <span className="clock__amount">{zerofill(this.state.seconds)}</span>
            <span className="clock__unit">countdown</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Clock;