import React from 'react';
import logo from './logo.svg';
import './App.css';

function ShowBanner(props) {
  if (props.time > 45) {
    return (
      <div className="rest-block">
        Отдых
      </div>
    )
  } else {
    return (
      <div className="rest-block">
        Работа
      </div>
    )
  }
}

class Clock extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
  }

  componentDidMount() {
    this.timerId = setInterval(
      () => this.tick(), 1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div>
        <div>
          <ShowBanner time={this.state.date.getSeconds()}/>
        </div>
        <h1>Time</h1>
        <div>{this.state.date.toLocaleTimeString()}</div>
      </div>
    );
  }
}

export default Clock;
