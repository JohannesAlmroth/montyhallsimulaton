import { DataPoint } from '../components/Charts/LChart';

export function CreateRechartData(alternatives: string[], orderedListOfPicks: string[]): DataPoint[] {
	let result: DataPoint[] = [];
	const firstDatapoint: DataPoint = { name: 0 };
	alternatives.forEach(key => firstDatapoint[key] = 0)
	result.push(firstDatapoint);

	for (let i = 0; i < orderedListOfPicks.length; i++) {
		const previousDataPoint = result[i];
		let newDataPoint = Object.assign({}, previousDataPoint);
		newDataPoint['name'] = i + 1;
		newDataPoint[orderedListOfPicks[i]] += 1;
		result.push(newDataPoint);
	}

	return result;
}
