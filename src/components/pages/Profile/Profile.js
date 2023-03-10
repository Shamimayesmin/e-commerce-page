import React from "react";
import Earning from "./Earning";

const Profile = () => {
	return (
		<section className="w-full dark:bg-gray-800 dark:text-gray-100">
			<div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-3">
				<div className="flex w-96 flex-col mx-1 my-6 shadow-lg">
					<div
						style={{
							backgroundImage: `url("https://i.ibb.co/PG5m3GY/bg.png")`,
						}}
						className="px-4 bg-black py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900"
					></div>
					<div className="flex flex-col bg-white items-center justify-center p-8 rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
						<img
							src="https://i.ibb.co/yq8zMGL/images-1.jpg"
							alt=""
							className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-700"
						/>
						<p className="text-base font-semibold leading-tight">
							Wajiha Rahman
						</p>
						<p className="text-sm">Web Developer</p>
					</div>
					<div className="flex my-6 items-center justify-center mx-auto">
						<div>
							<h2 className="font-bold">1,296</h2>
							<p>Products</p>
						</div>
                        <div className="divider h-full lg:divider-horizontal"></div>
                        <div>
                            <h3 className="font-bold">5.2k</h3>
                            <p>Followers</p>
                        </div>
                        
					</div>
                    <div className="divider px-3"></div> 

                    <div>
                        <Earning></Earning>
                    </div>
                    <div className="divider px-3"></div> 
				</div>
			</div>
		</section>
	);
};

export default Profile;
