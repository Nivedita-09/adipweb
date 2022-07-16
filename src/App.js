import React  from 'react';
import Navbar from './components/Navbar/Navbar.js';
import Herobanner from './components/Herobanner/herobanner.js';
import './App.css';
import Card from './components/Home/home';

function App() {
  return (
    <div className="App">
      {/*<Navbar />
      <Herobanner />*/}

      {/* JUST TO RUN THE CARD FILE I HAVE COMMENT NAVBAR && HEROBANNER */}
      <Card />
    </div>
  );
}

export default App;
