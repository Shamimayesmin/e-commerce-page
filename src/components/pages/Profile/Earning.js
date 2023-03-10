import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ImNotification} from 'react-icons/im';

const Earning = () => {
    const [state , setState] = useState({
        series: [76],
            options: {
              chart: {
                type: 'radialBar',
                offsetY: -20,
                sparkline: {
                  enabled: true
                }
              },
              plotOptions: {
                radialBar: {
                  startAngle: -90,
                  endAngle: 90,
                  track: {
                    background: "#e7e7e7",
                    strokeWidth: '97%',
                    margin: 5, // margin is in pixels
                    dropShadow: {
                      enabled: true,
                      top: 2,
                      left: 0,
                      color: '#999',
                      opacity: 1,
                      blur: 2
                    }
                  },
                  dataLabels: {
                    name: {
                      show: false
                    },
                    value: {
                      offsetY: -2,
                      fontSize: '22px'
                    }
                  }
                }
              },
              grid: {
                padding: {
                  top: -10
                }
              },
              fill: {
                type: 'gradient',
                gradient: {
                  shade: 'light',
                  shadeIntensity: 0.4,
                  inverseColors: false,
                  opacityFrom: 1,
                  opacityTo: 1,
                  stops: [0, 50, 53, 91]
                },
              },
              labels: ['Average Results'],
            },
          
          
        
    })
    return (
        <div className="card">
        <div className="py-6">
            
            <div className="flex justify-between px-5">
            <h2 className="font-bold">Earning</h2>
            <span className=""><ImNotification/></span>
            </div>
            
            
            <ReactApexChart options={state.options} series={state.series} type="radialBar" />

            <div>
                <h2 className='font-bold py-2'>$26,256</h2>
                <p>Earning this month</p>
                <div className='py-3'>
                <div className="badge bg-green-100 text-green-700 text-xs">+2.65%</div>
                 <span>From previous period</span>
                </div>
            </div>
           
        </div>
    </div>
    );
};

export default Earning;