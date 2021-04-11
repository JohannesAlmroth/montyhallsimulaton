import { LineChart, XAxis, YAxis, Tooltip, Legend, Line, CartesianGrid } from 'recharts';
import { chartColors } from '../../styles/colors';
import styled from 'styled-components';

export interface DataPoint {
  name: number;
  [key: string]: number;
}

interface LChartProps {
  data: DataPoint[];
  alternatives: string[];
}

export function LChart(props: LChartProps) {
  return (
    <Wrapper>
      <LineChart
        width={500}
        height={300}
        data={props.data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {
          props.alternatives.map((key, index) => <Line type="monotone" key={key} dataKey={key} stroke={chartColors[index % chartColors.length]} />)
        }
      </LineChart>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 1rem;
`;