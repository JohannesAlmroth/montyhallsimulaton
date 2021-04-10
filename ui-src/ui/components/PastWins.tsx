import { LChart } from './Charts/LChart';
import { CreateRechartData } from '../utils/chartUtils';

interface PastWinsProps {
  picksInOrder: string[];
}

const data2 = ['Car', 'Goat', 'Car', 'Goat' ];

export function PastWins(props: PastWinsProps) {

  return (
    <div className="PastWins">
      <LChart data={CreateRechartData(data2)} />
    </div>
  );
}