import { LChart } from './Charts/LChart';
import { CreateRechartData } from '../utils/chartUtils';

interface PastWinsProps {
  picksInOrder: string[];
  alternatives: string[];
}

export function PastWins(props: PastWinsProps) {

  return (
    <div className="PastWins">
      <LChart data={CreateRechartData(props.alternatives, props.picksInOrder)} alternatives={props.alternatives} />
    </div>
  );
}