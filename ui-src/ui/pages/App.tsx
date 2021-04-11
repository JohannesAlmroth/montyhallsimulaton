import { PastWins } from '../components/PastWins';
import { useState } from 'react';
import { getPick } from '../api/index';
import { DoorModel, PickRequest } from '../api/models/Pick';
import styled from 'styled-components';

function App() {
  var defaultPrizes: DoorModel[] = [{ content: 'Car', amount: 1, canBeOpenedByMonty: false },
  { content: 'Goat', amount: 2, canBeOpenedByMonty: true }]
  const [listOfPrizes, setListOfPrizes] = useState<DoorModel[]>(defaultPrizes);
  const [picksInOrder, setPicksInOrder] = useState<string[]>([]);
  const [switches, setSwitches] = useState<number>(1);
  const alternatives: string[] = listOfPrizes.map(p => p.content);

  const Simulate = async () => {
    const request: PickRequest = { doors: listOfPrizes, switches: switches };
    const pick = await getPick(request);
    setPicksInOrder([...picksInOrder, pick]);
  }

  const Reset = () => {
    setPicksInOrder([]);
  }

  const generateRoundInfo = () => {
    return picksInOrder.map((pick, index) => {
      <p>Round {index + 1}: {pick}</p>
    }).reverse();
  }

  return (
    <Wrapper>
      <p>Monty Hall simulation</p>
      <Button onClick={() => Simulate()}>Simulera</Button>
      <Button onClick={() => Reset()}>Reset</Button>
      <PastWins picksInOrder={picksInOrder} alternatives={alternatives} />
    </Wrapper>
  );
}

export default App;

const InfoWrapper = styled.div`
  display: flex;
`

const Wrapper = styled.div`
  width: 100%;
`;

const Button = styled.button`
	display: inline-block;
	text-decoration: none;
	text-align: center;
	border: 1px solid blue;
	padding: 0.75rem 1.25rem;
	color: black;
`;