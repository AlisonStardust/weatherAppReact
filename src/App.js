import React, { Component } from 'react';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }


componentDidMount() {
  fetch('https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139')
    .then(results => results.json())
    .then(json => this.setState({country: json.name, temperature: json.main.temp, how: json.weather[0].main}));
  
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Weather App</h1>
        </header>
        <div className="app">
          <div class="app--section">Location:
            <p class="print" id="city">{this.state.country}</p>
            <p class="print" id="country"></p>
          </div>
          <div class="app--section">Date and Time:
            <p class="print" id="current">
            {(new Date()).toString()}</p>
          </div>
          <div class="app--section">Temperature:
            <p class="print" id="temp">{this.state.temperature}</p>
          </div>
          <div class="app--section">Weather description:
            <p class="print" id="how">{this.state.how}</p>
          </div>
        </div>
      </div>
    );
  }

}
export default App;