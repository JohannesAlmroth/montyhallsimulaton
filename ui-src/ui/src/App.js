import './App.css';
import { PastWins } from './components/PastWins';
import React, { useState } from 'react';


function App() {
  var defaultPrizes = { car: 1, goat: 2 };
  const [listOfPrizes, setListOfPrizes] = useState(defaultPrizes);

  return (
    <div className="App">
      <PastWins props={listOfPrizes} />
    </div>
  );
}

export default App;
