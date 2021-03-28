import React, { useState } from 'react';
import { LineChart, Line } from 'recharts';

export function Chart(props) {
	const data = [
		{name: 'Page A', uv: 400, pv: 2400, amt: 2400},
		{name: 'Page B', uv: 400, pv: 2400, amt: 2400},];
	
	return (
  <LineChart width={400} height={400} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  </LineChart>
	)
}