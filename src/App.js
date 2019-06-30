import React, { Component } from 'react';
import Container from './Container';
import './style.css';

class App extends Component {
  render() {
    const data =
    {
      languages: "C++",
      editors: "VS Code",
      BestDay: "3 Hours of JavaScript"
    }
      ;
    return (
      <div>
        <h1 className="App">Salwa's Wakatime Stats</h1>
        <Container languages={data.languages} editors={data.editors} bestDay={data.BestDay} />
      </div>
    );
  }
}

export default App;
