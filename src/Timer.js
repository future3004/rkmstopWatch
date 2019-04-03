import React, { Component } from 'react';
import Emoji from 'react-emoji-render';


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

          <br />
          <p style={{marginTop: '40px'}}>
            Meanwhile, check out my site here to see other projects i have built: <br />
          </p>

          <p><Emoji text=":point_down:" /></p>

          <a className="grey-text text-lighten-4 right App-link"
          href="https://kalibbala.com/"
          target="_blank"
          rel="noopener noreferrer">
            Richard Kalibbala Site
          </a>

          <br />

           <p classID="spce"><Emoji text="This ❤️ sentence includes :+1: a variety of emoji types :)" /></p>

      </div>
      );
    }
  }

  export default Timer;
