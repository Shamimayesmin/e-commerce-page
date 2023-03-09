import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const UserActivity = () => {

    const [state , setState] = useState({
        series: [{
            name: 'Current',
            data: [20, 55, 45, 82, 40,43]
          }, {
            name: 'Previous',
            data: [40, 35, 60, 32, 54, 42]
          }],
          options: {
            chart: {
              height: 200,
              type: 'area'
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'smooth'
            },
            
            tooltip: {
              x: {
                format: 'dd/MM/yy HH:mm'
              },
            },
          },
        
        
      
        
    })

    return (
        <div className="card shadow-lg bg-white">
				<div className="shadow-2xl py-6 rounded-xl">
					
                    <div className="flex justify-between px-5">
                    <h2 className="font-bold">User Activity</h2>
                    <span className="">Weekly</span>
                    </div>
                    <h4 className="text-start px-5">This month</h4>
                    <p className="text-start text-2xl font-bold px-5">16,543</p>
                    
					
					
                    <ReactApexChart options={state.options} series={state.series} type="area" width={270} height={200} />
                   
				</div>
			</div>
    );
};

export default UserActivity;