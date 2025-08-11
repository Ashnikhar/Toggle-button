import './App.css';
import Welcome from './components/Welcome';
import { useState } from 'react';
import Toggle from './components/Toggle';
import To from './components/To';

function App() {
 

  return (
    <div className="app-container">
      <div className="content">
        <Welcome name="Ashwin" email="ashwinnikhar@gmail.com" />
        <Toggle />
        <To/>
      </div>
    </div>
  );
}

export default App;
