import { DataPoint } from '../components/Charts/LChart';

export function CreateRechartData(orderedListOfPicks: string[]): DataPoint[] {
	const distinct = [...new Set(orderedListOfPicks)];
	let result: DataPoint[] = []

	for (let i = 0; i < orderedListOfPicks.length; i++) {
		let newDataPoint: DataPoint = { name: i };
		if (i === 0) {
			distinct.forEach(key => newDataPoint[key] = 0)
		}
		else {
			const previousDataPoint = result[i - 1];
			newDataPoint = Object.assign({}, previousDataPoint);
			newDataPoint['name'] = i;
			newDataPoint[orderedListOfPicks[i-1]] += 1;
		}
		result.push(newDataPoint);
    console.log("🚀 ~ file: chartUtils.ts ~ line 18 ~ CreateRechartData ~ newDataPoint", newDataPoint)
	}
	return result;
}