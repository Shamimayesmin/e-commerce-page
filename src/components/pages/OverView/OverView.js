import React from "react";
import Chart from "./Chart";
import MonthIncome from "./MonthIncome";
//mx-4
const OverView = () => {
	return (
		<div>
			<div class="flex shadow-lg rounded-lg mt-4 bg-white container w-full flex-col items-center justify-center lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10 sm:justify-between">
				<div class="w-2/5 container mx-auto">
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
