import React from 'react';
import Navbar from './components/navbar';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id='content'>
          <div className='side-bar'></div>
          <div className="main-content"></div>
      </div>
    </div>
  );
}

export default App;
