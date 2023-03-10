import React from "react";
import Chart from "./Chart";
import MonthIncome from "./MonthIncome";
//mx-4 flex-col lg:flex-row-reverse    shadow-lg rounded-lg mt-4 bg-white container w-full flex-col items-center justify-center lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10 sm:justify-between
const OverView = () => {
	return (
		<div>
			<div class=" flex flex-col lg:flex-row">
				<div class="lg:w-2/5 sm:w-full md:w-full rounded-lg container mx-auto">
                   <MonthIncome></MonthIncome>
                </div>
				<div class="lg:w-3/5 sm:w-full md:w-full rounded-lg">
                   <Chart></Chart>
                </div>
			</div>
		</div>
	);
};

export default OverView;
