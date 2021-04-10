import { LChart } from './Charts/LChart';

interface PastWinsProps {
  picksInOrder: string[];
}

const fakeData = [
  { name: 1, car: 0, goat: 0 },
  { name: 2, car: 1, goat: 0 },
  { name: 3, car: 1, goat: 1 },
  { name: 5, car: 2, goat: 1 },
  { name: 6, car: 2, goat: 2 },
  { name: 7, car: 2, goat: 3 },
]

export function PastWins(props: PastWinsProps) {

  return (
    <div className="PastWins">
      <LChart data={fakeData} />
    </div>
  );
}