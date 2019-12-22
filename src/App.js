import React from 'react';
import Navbar from './components/navbar';
import RegisterContainer from './container/register';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id='content'>
          <RegisterContainer/>
      </div>
    </div>
  );
}

export default App;
