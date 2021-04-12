import React, {useEffect} from 'react';
import {createChart} from "lightweight-charts";

const PortfolioChart = (props) => {

  useEffect(() => { 
    document.getElementById('portfolioChart').innerHTML = '';
    const chart = createChart(document.getElementById('portfolioChart'), {
    width: 300,
    height: 200,
    rightPriceScale: {
      borderVisible: false,
    },
    timeScale: {
      borderVisible: false,
    },
  });
  
  const areaSeries = chart.addAreaSeries({
    topColor: '#05A49E',
    bottomColor: 'rgba(1,173,163,0.04)',
    lineColor: '#05A49E',
    lineWidth: 2,
  });

  const background = chart.applyOptions({
    layout: {
        backgroundColor: 'rgb(59,52,99)',
        textColor: 'white',
        fontSize: 12,
    },
});

  const newDataToChart = [ {exec_time: '2018-10-19', cost: 35.98 },
      { exec_time: '2018-10-22', cost: 35.75},
  ]

  const transactionsData = [
      {exec_time: '2018-10-19', cost: 35.98 },
    { exec_time: '2018-10-22', cost: 35.75 },
    { exec_time: '2018-10-22', cost: 35.65 },
    { exec_time: '2018-10-23', cost: 35.75 },
    { exec_time: '2018-10-24', cost: 35.65 },
  ]
  
  areaSeries.setData([
    { time: '2018-10-19', value: 35.98 },
    { time: '2018-10-22', value: 35.75 },
    { time: '2018-10-23', value: 35.65 },
    { time: '2018-10-24', value: 34.12 },
    { time: '2018-10-25', value: 35.84 },
    { time: '2018-10-26', value: 35.24 },
    { time: '2018-10-29', value: 35.99 },
    { time: '2018-10-30', value: 37.71 },
    { time: '2018-10-31', value: 38.14 },
    { time: '2018-11-01', value: 37.95 },
  ]);
}, [])
  
   
  return (
    <>
       <div id="portfolioChart"></div> 
    </>
  )
}

  export default PortfolioChart;