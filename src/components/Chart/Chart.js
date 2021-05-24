import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) =>{
	const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
	const Max = Math.max(...dataPointValues);
	return (
		<div className="chart">
			{
				props.dataPoints.map(dataPoint => 
				<ChartBar value={dataPoint.value}
				key={dataPoint.label} 
				maxValue={Max}
				label={dataPoint.label}	
				/>)
			}
		</div>
	)
}
export default Chart;