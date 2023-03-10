import React from "react";
import { Link, Outlet } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import Navbar from "../../pages/Navbar/Navbar";
import Footer from "../../pages/Footer/Footer";

const DashboardLayout = () => {
	return (
		<div className="">
			<Navbar></Navbar>

			<div className="drawer drawer-mobile">
				<input
					id="dashboard-drawer"
					type="checkbox"
					className="drawer-toggle"
				/>
				<div className="drawer-content">
					<Outlet></Outlet>
				</div>
				<div className="drawer-side sm:text-black bg-neutral rounded-sm">
					<label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

					<ul className="menu p-4 w-64">
						<div className="dropdown dropdown-start mr-40">
							<label tabIndex={0} className="btn m-1 w-full bg-slate-500">
								<div className="flex justify-center items-center">
									<RxDashboard className="text-white mr-1 text-2xl"></RxDashboard>
									<p>Dashboard</p>
								</div>
							</label>
							<ul
								tabIndex={0}
								className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
							>
								<li className="mb-4 hover:bg-violet-400">
									<Link to="/">Ecommerce</Link>
								</li>
								<li className=" hover:bg-violet-400">
									<a>Saas</a>
								</li>
							</ul>
						</div>
						{/* <>
							<li className="hover:bg-red-600 hover:text-white rounded-lg">
								<Link to="/dashboard/addstudent" className="text-center">
									<FiUsers className="ml-7"></FiUsers>
									Add Student
								</Link>
							</li>
							<li className="hover:bg-red-600 hover:text-white rounded-lg">
								<Link to="/dashboard/manage">
									<MdManageSearch className="ml-7" />
									Manage Student
								</Link>
							</li>
						</> */}
					</ul>
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default DashboardLayout;
