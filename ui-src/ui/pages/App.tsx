import { PastWins } from '../components/PastWins';
import { useState } from 'react';
import { getPick } from '../api/index';
import { DoorModel, PickRequest } from '../api/models/Pick';
import styled from 'styled-components';


function App() {
  var defaultPrizes: DoorModel[] = [ { content: 'Car', amount: 1, canBeOpenedByMonty: false },
  { content: 'Goat', amount: 2, canBeOpenedByMonty: true }]
  const [listOfPrizes, setListOfPrizes] = useState(defaultPrizes);
  const [picksInOrder, setPicksInOrder] = useState<string[]>([]);
	const alternatives = [...new Set(Object.keys(listOfPrizes))];

  const Simulate = async () => {
    const request: PickRequest = { doors: listOfPrizes, switches: 1 };
    const pick = await getPick(request);
    console.log("🚀 ~ file: App.tsx ~ line 18 ~ Simulate ~ pick", pick)
    setPicksInOrder([...picksInOrder, pick]);
    // var choices = Object.keys(listOfPrizes);
    // var randomChoice = Math.floor((Math.random() * Object.keys(listOfPrizes).length) + 1);
    // var pick = choices[randomChoice - 1];
    // setPicksInOrder([ ...picksInOrder, pick]);
  }

  return (
    <Wrapper>
      <p>Monty Hall simulation</p>
      <PastWins picksInOrder={picksInOrder} alternatives={alternatives} />
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