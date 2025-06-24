import React from 'react';

class Task5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
      running: true
    };
  }

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  startTimer = () => {
    this.timerID = setInterval(() => {
      if (this.state.running) {
        this.setState({ time: new Date().toLocaleTimeString() });
      }
    }, 1000);
  };

  toggleTimer = () => {
    this.setState((prevState) => ({
      running: !prevState.running
    }));
  };

  render() {
    return (
      <div>
        <h2>Task 5: Timer</h2>
        <h3>Current Time: {this.state.time}</h3>
        <button onClick={this.toggleTimer}>
          {this.state.running ? 'Pause' : 'Resume'}
        </button>
      </div>
    );
  }
}

export default Task5;
