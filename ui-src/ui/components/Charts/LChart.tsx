import { LineChart, XAxis, YAxis, Tooltip, Legend, Line, CartesianGrid } from 'recharts';
import { chartColors } from '../../styles/colors';
import styled from 'styled-components';
import { CreateRechartData } from '../../utils/chartUtils';

export interface DataPoint {
  name: number;
  [key: string]: number;
}

interface LChartProps {
  data: DataPoint[];
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
        {props.data &&
          Object.keys(props.data[0])
            .filter(key => key !== 'name')
            .map((key, index) => <Line type="monotone" dataKey={key} stroke={chartColors[index % chartColors.length]} />)
        }
      </LineChart>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;