import React from "react";


const TopProduct = () => {
	return (
		<div>
			<div className="card shadow-lg bg-white">
				
				<div className="card-body gap-4">
                <div className="flex justify-between px-5">
					<h2 className="font-bold">Top-Product</h2>
					<span>Monthly</span>
				</div>
					<div className="flex items-center gap-3">
						<div className="bg-violet-400 p-2 rounded-lg">
							<h3>#1</h3>
						</div>
						<div>
							<h2>Shirt</h2>
							<p>$21.4</p>
						</div>

						<div className="card-actions justify-end ml-10">
							<div className="badge text-xs bg-green-100 text-green-700">+2.65%</div>
						</div>
					</div>
					<div className="flex items-center gap-3">
						<div className="bg-violet-400 p-2 rounded-lg">
							<h2>#2</h2>
						</div>
						<div>
							<h2>Hoodie</h2>
							<p>$24.7</p>
						</div>

						<div className="card-actions justify-end ml-10">
							<div className="badge text-xs bg-green-100 text-green-700">+2.65%</div>
						</div>
					</div>
					<div className="flex items-center gap-3">
						<div className="bg-violet-400 p-2 rounded-lg">
							<h2>#3</h2>
						</div>
						<div>
							<h2>Cap</h2>
							<p>$22.5</p>
						</div>

						<div className="card-actions justify-end ml-10">
							<div className="badge text-xs bg-green-100 text-green-700">+2.65%</div>
						</div>
					</div>
					<div className="flex items-center gap-3">
						<div className="bg-violet-400 p-2 rounded-lg">
							<h2>#4</h2>
						</div>
						<div>
							<h2>Shirt</h2>
							<p>$25.3</p>
						</div>

						<div className="card-actions justify-end ml-10">
							<div className="badge text-xs bg-green-100 text-green-700">+2.65%</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopProduct;
