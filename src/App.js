import React from 'react';
import logo from './logo.svg';
import './App.css';

import Welcome from './Welcome'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome name="Varma" year={2020}/>
        <Welcome name="Ram"/>
      </header>
    </div>
  );
}

export default App;
