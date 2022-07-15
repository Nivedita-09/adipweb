import React  from 'react';
import Navbar from './components/Navbar/Navbar.js';
import Herobanner from './components/Herobanner/herobanner.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Herobanner />
    </div>
  );
}

export default App;
