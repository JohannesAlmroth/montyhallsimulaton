import { LChart } from './Charts/LChart';
import { CreateRechartData } from '../utils/chartUtils';
import styled from 'styled-components';

interface DisplayDataProps {
  picksInOrder: string[];
  alternatives: string[];
}

export function DisplayData(props: DisplayDataProps) {

  return (
    <Wrapper>
      <LChart data={CreateRechartData(props.alternatives, props.picksInOrder)} alternatives={props.alternatives} />
      <RoundWrapper>
        {props.picksInOrder.length > 0 &&
          props.picksInOrder.map((pick, index) => {
            return <p key={pick+index}>Round {index + 1}: {pick}</p>
          }).reverse()
        }
      </RoundWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`

`;

const RoundWrapper = styled.div`
  max-height: 400px;
  overflow-y: auto;
`;