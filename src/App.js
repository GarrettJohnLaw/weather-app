import React from 'react';
import './App.css';
import Forecast from "./Components/Forecast/Forecast";

function App() {
  return (
    <div className="App">
      <header>
      <h1>React Weather App</h1>
      </header>
      <main>
        <Forecast />
      </main>
      <footer>
        <p>This React Weather App was created by Garrett John Law</p>
      </footer>
    </div>
  );
}

export default App;
