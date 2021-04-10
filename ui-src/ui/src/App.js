import './App.css';
import { PastWins } from './components/PastWins';
import React, { useState } from 'react';
import styled from 'styled-components';
import { getResult } from './api/index';


function App() {
  var defaultPrizes = { car: 1, goat: 2 };
  const [listOfPrizes, setListOfPrizes] = useState(defaultPrizes);
  const [picks, setPicks] = useState([]);

  const Simulate = async () => {
    // var result = await getResult(listOfPrizes);
    var randomChoice = Math.floor(Math.Random() + 1);
    var choices = ["car", "goat"];
    var pick = choices[randomChoice];
    setPicks(picks.push(picks));
  }

  return (
    <Wrapper>
      <p>Monty Hall simulation</p>
      <PastWins props={picks} />
      <SimulateButton onClick={() => Simulate()}>Simulera</SimulateButton>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100%;
`;

const SimulateButton = styled.button`
	display: inline-block;
	text-decoration: none;
	text-align: center;
	border: 1px solid blue;
	padding: 0.75rem 1.25rem;
	color: black;
`;