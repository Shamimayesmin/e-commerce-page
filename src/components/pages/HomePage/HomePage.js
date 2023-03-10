import React from "react";
import BottomSection from "../BottomSection/BottomSection";
import OverView from "../OverView/OverView";
import Profile from "../Profile/Profile";
import SmallCard from "../SmallCard/SmallCard";


const HomePage = () => {
	return (
		<div class="flex flex-col lg:flex-row mx-auto sm:flex-col-reverse">
			<div class="w-3/4">
				<SmallCard></SmallCard>
                <OverView></OverView>
               <BottomSection></BottomSection>
                
			</div>
			<div class="w-1/4 m-3">
				<Profile></Profile>
			</div>
		</div>
	);
};

export default HomePage;
