import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const Order = () => {
	const [state, setState] = useState({
		series: [30, 50, 20],
		options: {
			chart: {
				width: 350,
				type: "donut",
			},
			plotOptions: {
				pie: {
					startAngle: -90,
					endAngle: 270,
				},
			},
			dataLabels: {
				enabled: false,
			},
			fill: {
				type: "gradient",
			},

			responsive: [
				{
					breakpoint: 480,
					options: {
						chart: {
							width: 200,
						},
						legend: {
							position: "bottom",
						},
					},
				},
			],
		},
	});
	return (
		<div>
			<div className="card shadow-lg bg-white">
				<div className="card-body">
					<h2 className="font-bold text-start">Order stats</h2>

					<ReactApexChart
						className="py-10"
						options={state.options}
						series={state.series}
						type="donut"
						width={270}
						height={300}
					/>

					<div className="flex">
						<h3 className="text-green-500">Complete</h3>
						<p className="text-blue-600">Pending</p>
						<p className="text-amber-500">Cancel</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Order;
