import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const Chart = () => {
    const [state , setState] = useState({
        series: [{
            name: 'Net Profit',
            data: [22, 25, 20, 28, 27, 29, 25, 35, 30]
          }, 
        
        ],
          options: {
            chart: {
              type: 'bar',
              height: 350
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '50%',
                endingShape: 'rounded',
                borderRadius: 12,
              },
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              show: true,
              width: 2,
              colors: ['transparent']
            },
            xaxis: {
              categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            },
            
            // fill: {
            //   opacity: 1
            // },
            fill: {
                type: 'gradient',
                gradient: {
                  shade: 'light',
                  type: "vertical",
                  shadeIntensity: 0.75,
                  gradientToColors: undefined,
                  inverseColors: true,
                  opacityTo: 0.75,
                  opacityFrom: 0.85,
                  
                  stops: [0, 60, 75]
                },
              },
            tooltip: {
              y: {
                formatter: function (val) {
                  return "$ " + val + " thousands"
                }
              }
            }
          },
        
        
        
    })
    return (
        <div className='py-6 px-4 mt-10 bg-white'>
            <ReactApexChart options={state.options} series={state.series} type="bar" height={350} />
        </div>
    
       
    );
};

export default Chart;