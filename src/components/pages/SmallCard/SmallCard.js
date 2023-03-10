import React from 'react';
import { AiFillPieChart} from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";
import { FaUserFriends } from "react-icons/fa";

const SmallCard = () => {
    return (
        <>
            <div className="grid container sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-5">
					<div className=" container card h-24 shadow-lg bg-white">
						<div className="card-body">
							<div className="flex items-center gap-3">
								<div className="bg-violet-400 p-2 rounded-lg">
									<AiFillPieChart className="text-2xl"/>
								</div>
								<div>
									<h2>Revenue</h2>
									<p>$21,456</p>
								</div>

								<div className="card-actions justify-end ml-10">
									<div className="badge bg-green-100 text-green-700 text-xs">+2.65%</div>
									
								</div>
							</div>

							
						</div>
					</div>
					<div className="card h-24 shadow-lg bg-white">
						<div className="card-body">
                        <div className="flex items-center gap-3">
								<div className="bg-violet-400 p-2 rounded-lg">
									<FiShoppingBag className="text-2xl"/>
								</div>
								<div>
									<h2>Orders</h2>
									<p>5,543</p>
								</div>

								<div className="card-actions justify-end ml-10">
									<div className="badge text-xs bg-red-200 text-red-600">-0.82%</div>
									
								</div>
							</div>
						</div>
					</div>
					<div className="card h-24 shadow-lg bg-white">
						<div className="card-body">
                        <div className="flex items-center gap-3">
								<div className="bg-violet-400 p-2 rounded-lg">
									<FaUserFriends className="text-2xl"/>
								</div>
								<div>
									<h2>Customers</h2>
									<p>$45,254</p>
								</div>

								<div className="card-actions justify-end ml-10">
									<div className="badge text-xs bg-red-200 text-red-600">-1.04%</div>
									
								</div>
							</div>
						</div>
					</div>
				</div>
        </>
    );
};

export default SmallCard;