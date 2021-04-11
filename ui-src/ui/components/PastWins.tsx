import { LChart } from './Charts/LChart';
import { CreateRechartData } from '../utils/chartUtils';
import styled from 'styled-components';

interface PastWinsProps {
  picksInOrder: string[];
  alternatives: string[];
}

export function PastWins(props: PastWinsProps) {

  return (
    <Wrapper>
      <LChart data={CreateRechartData(props.alternatives, props.picksInOrder)} alternatives={props.alternatives} />
      {props.picksInOrder.length > 0 &&
        props.picksInOrder.map((pick, index) => {
          return <p>Round {index + 1}: {pick}</p>
        }).reverse()
      }
    </Wrapper>
  );
}

const Wrapper = styled.div`
  
`;