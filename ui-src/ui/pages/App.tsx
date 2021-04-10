import './App.css';
import { PastWins } from '../components/PastWins';
import React, { useState } from 'react';
import styled from 'styled-components';


function App() {
  var defaultPrizes: {[prize: string]: number} = { "car": 1, "goat": 2 };
  const [listOfPrizes, setListOfPrizes] = useState(defaultPrizes);
  const [picksInOrder, setPicksInOrder] = useState<string[]>([]);

  const Simulate = async () => {
    // var result = await getResult(listOfPrizes);
    var randomChoice = Math.floor(Math.random() + 1);
    var choices = Object.keys(listOfPrizes);
    var pick = choices[randomChoice];
    setPicksInOrder([ ...picksInOrder, pick]);
  }

  return (
    <Wrapper>
      <p>Monty Hall simulation</p>
      <PastWins picksInOrder={picksInOrder} />
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