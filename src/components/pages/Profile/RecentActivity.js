import React from "react";

const RecentActivity = () => {
	return (
		<div className="card">
			<div className="card-body gap-4 bg-white">
				<h2 className="font-bold text-start">Recent Activity</h2>

				<div className="flex items-center gap-3">
					<div className="bg-violet-400 p-1 rounded-lg">
						<h3>12</h3>
						<p>Sep</p>
					</div>
					<div>
						<p>Responded to need ...</p>
					</div>
				</div>
				<div className="flex items-center gap-3">
					<div className="bg-violet-400 p-2 rounded-lg">
						<h3>11</h3>
						<p>Sep</p>
					</div>
					<div>
						<p>Everyone realizes...</p>
					</div>
				</div>
				<div className="flex items-center gap-3">
					<div className="bg-violet-400 p-2 rounded-lg">
						<h3>10</h3>
						<p>Sep</p>
					</div>
					<div>
						<p>Joined the group...</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RecentActivity;
