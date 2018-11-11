import React, { Component } from 'react';
import axios from 'axios';

import Scorecard from './Scorecard/Scorecard';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
  }
  componentDidMount() {
    this.fetchData();
    setInterval(this.fetchData, 3000);
  }
  fetchData = () => {
    axios('http://localhost:3007/api/update')
      .then(res => res.data)
      .then(res => {
        console.log('response', res)
        this.setState({ data: res })
      })
      .catch(err => {
        this.setState({ data: [] })
      })
  }
  render() {
    const {data} = this.state
    const commentry = data && data.length > 0 ? data.map(row => <p>{row.commentry}</p>) : 'No Commentry Yet!'
    const scorecardProps = data && data.length > 0 ? data[0] : { player1Name: 'No data there' }
    // const topHeader = data && data.length > 0
    //   ? `${data[0].player1Name} vs ${data[0].player2Name} (Set ${data[0].player1Sets + data[0].player2Sets + 1 <= 3 ? data[0].player1Sets + data[0].player2Sets + 1 : 3})`
    //   : "Table Tennis Tournament"
    const topHeader = data && data.length > 0
      ? `Table Tennis Tournament (Set ${data[0].player1Sets + data[0].player2Sets + 1 <= 3 ? data[0].player1Sets + data[0].player2Sets + 1 : 3})`
      : "Table Tennis Tournament"
    return (
      <div className="App">
        <div className="App-header"><b>{topHeader}</b></div>

        <Scorecard {...scorecardProps} />
        <div className="App-header"><b>Commentry</b></div>
        {commentry}
      </div>
    );
  }
}

export default App;
