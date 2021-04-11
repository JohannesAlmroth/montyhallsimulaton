import { DisplayData } from '../components/DisplayData';
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
  const nrOfPicks = picksInOrder.length;

  const Simulate = async () => {
    const request: PickRequest = { doors: listOfPrizes, switches: switches };
    const pick = await getPick(request);
    setPicksInOrder([...picksInOrder, pick]);
  }

  const Reset = () => {
    setPicksInOrder([]);
  }


  return (
    <Wrapper>
      <p>Monty Hall simulation</p>
      <TopWrapper>
        <Button onClick={() => Simulate()}>Pick</Button>
        <Button onClick={() => Reset()}>Reset</Button>
      </TopWrapper>
      <MiddleWrapper>
        <DisplayData picksInOrder={picksInOrder} alternatives={alternatives} />
        <TextWrapper>
          <p>Stats after {nrOfPicks} pick(s):</p>
          {listOfPrizes.map(door => {
            const timesPicked: number = picksInOrder.filter(pick => pick === door.content).length;
            return (
              <>
                <p>{door.content}: {door.amount} door(s)</p>
                <p>Picked {timesPicked}/{nrOfPicks} ({(timesPicked / nrOfPicks * 100).toFixed(2)}%)</p>
              </>
            )
          })}
        </TextWrapper>
      </MiddleWrapper>
    </Wrapper>
  );
}

export default App;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
`;

const MiddleWrapper = styled.div`
  display: flex;
  direction: row;
  width: 100%;
  height: 100%;
`;

const TopWrapper = styled.div`
  width: 300px;
  display: flex;
  direction: row;
  justify-content: space-evenly;
`;

const Wrapper = styled.div`
  width: 100%;
  margin: 1rem;
`;

const Button = styled.button`
	display: inline-block;
	text-decoration: none;
	text-align: center;
	border: 1px solid blue;
	padding: 0.75rem 1.25rem;
	color: black;
`;