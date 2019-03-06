import React, { Component } from 'react';

class Timer extends Component {

  constructor(props){
    super(props);

    this.state = {
      clock: 0
    };

    this.ticker = this.ticker.bind(this);
  }

  ticker(){
    this.setState({clock: new Date() - this.props.start})
  }

  componentDidMount(){
    this.timer = setInterval(this.ticker, 1000)
  }

  render(){
    console.log(this.props.start);

    var timeIs = Math.round(this.state.clock / 1000);

    return(
      <div>

        <h1>RKM Timer</h1> <br />
        <p>Time on this site: </p> <br />

        <span>{timeIs}</span>

        <p>Seconds</p>


      </div>
      );
    }
  }

  export default Timer;
