import React from "react";

const MonthIncome = () => {
	return (
		<div className="py-6 px-4 bg-white mx-auto">
			<h1 className="text-start px-5 mb-3 font-bold">Overview</h1>
			<h2 className="text-start px-5">This Month</h2>
			<div className="flex items-center px-5 py-2">
				<h3 className="text-3xl font-bold">$24,568</h3>
				<div className="card-actions justify-end ml-10">
					<div className="badge text-xs bg-green-100 text-green-700">+2.65%</div>
				</div>
			</div>
			<div className="px-7 mt-4">
				<div className="flex ">
					<div>
						<h2>Orders</h2>
						<p className="font-bold">5,643</p>
					</div>
					<div className="divider h-full lg:divider-horizontal"></div>
					<div>
						<h2>Sales</h2>
						<p className="font-bold">16,273</p>
					</div>
				</div>
				<div className="divider"></div>
				<div className="flex">
					<div>
						<h2>Orders Value</h2>
						<p className="font-bold">12.03%</p>
					</div>
					<div className="divider h-full lg:divider-horizontal"></div>
					<div>
						<h2>Customers</h2>
						<p className="font-bold">21,456</p>
					</div>
				</div>
				<div className="divider"></div>
				<div className="flex">
					<div>
						<h2>Income</h2>
						<p className="font-bold">$ 35,452</p>
					</div>
					<div className="divider h-full lg:divider-horizontal"></div>
					<div>
						<h2>Expenses</h2>
						<p className="font-bold">$12,273</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MonthIncome;
