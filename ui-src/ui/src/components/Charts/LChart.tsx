import React from 'react';
import { LineChart, XAxis, YAxis, Tooltip, Legend, Line, CartesianGrid } from 'recharts';
import styled from 'styled-components';

const data = [
  { name: 'Round 0', car: 0, goat: 0},
  { name: 'Round 1', car: 0, goat: 1},
  { name: 'Round 2', car: 1, goat: 1},
  { name: 'Round 3', car: 2, goat: 1},
]

interface LChartProps {
  data: string[];
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
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="car" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="goat" stroke="#82ca9d" />
        </LineChart>
      </Wrapper>
    );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;