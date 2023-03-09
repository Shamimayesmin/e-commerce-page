import React from "react";
import Chart from "./Chart";
import MonthIncome from "./MonthIncome";

const OverView = () => {
	return (
		<div>
			<div class="flex shadow-lg rounded-lg mt-4 mx-4 lg:flex-row md:flex-wrap sm:flex-wrap bg-white">
				<div class="w-2/5">
                   <MonthIncome></MonthIncome>
                </div>
				<div class="w-3/5">
                   <Chart></Chart>
                </div>
			</div>
		</div>
	);
};

export default OverView;
