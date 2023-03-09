import React from "react";
import BottomSection from "../BottomSection/BottomSection";
import Chart from "../OverView/Chart";
import OverView from "../OverView/OverView";
import SmallCard from "../SmallCard/SmallCard";


const HomePage = () => {
	return (
		<div class="flex">
			<div class="w-3/4">
				<SmallCard></SmallCard>
                <OverView></OverView>
               <BottomSection></BottomSection>
                
			</div>
			<div class="w-1/4 ...">w-1/4</div>
		</div>
	);
};

export default HomePage;
