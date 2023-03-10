import React from "react";
import Chart from "./Chart";
import MonthIncome from "./MonthIncome";

const OverView = () => {
	return (
		<div>
			<div class=" flex flex-col lg:flex-row  rounded-md">
				<div class="lg:w-2/5 sm:w-full md:w-full rounded-lg container mx-auto">
                   <MonthIncome></MonthIncome>
                </div>
				<div class="lg:w-3/5 sm:w-full md:w-full sm:mx-5 md:mx-5 rounded-lg">
                   <Chart></Chart>
                </div>
			</div>
		</div>
	);
};

export default OverView;
