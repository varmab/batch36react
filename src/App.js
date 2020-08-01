import React from 'react';
import logo from './logo.svg';
import './App.css';

import Welcome from './Welcome'
import Counter from './Counter'
import Friends from './Friends'
import Todos from './Todos'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome name="Varma" password="123456"/>
        <Welcome name="Ram" password="123456"/>
      </header>
      <Todos/>
    </div>
  );
}

export default App;
