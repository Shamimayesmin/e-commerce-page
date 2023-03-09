import React, { useState } from "react";

import Order from "./Order";
import TopProduct from "./TopProduct";
import UserActivity from "./UserActivity";

const BottomSection = () => {

   
    
	return (
		<div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 mt-4 mb-10 p-4">
			<div>
                <UserActivity></UserActivity>
            </div>
            <div>
                <Order></Order>
            </div>

            <div>
                <TopProduct></TopProduct>
            </div>
			
			
		</div>
	);
};

export default BottomSection;
