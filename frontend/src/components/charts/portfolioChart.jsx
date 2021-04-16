import React, {useEffect} from 'react';
import {createChart} from "lightweight-charts";

const PortfolioChart = ({data}) => {

  useEffect(() => {

    const graphData = [];
      data.forEach((transaction, index) => {
      const stringDate = transaction.exec_time.slice(0, 10)
      if (index === 0) {
        graphData.push({
          time: stringDate,
          value: parseInt(transaction.cost)
        })
      } else {

        const lastItem = graphData[graphData.length -1];

        if (stringDate === lastItem.time) {
          if (transaction.buy_sell === "B") {
            lastItem.value += parseInt(transaction.cost)
          } else {
            lastItem.value -= parseInt(transaction.cost)
          }
        } else {
            graphData.push({
              time: stringDate,
              value: parseInt(transaction.cost)
        })
        }
      }
    })

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

  chart.applyOptions({
    layout: {
        backgroundColor: 'rgb(59,52,99)',
        textColor: 'white',
        fontSize: 12,
    },
});

  areaSeries.setData(
    graphData
  );
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])
  
   
  return (
    <>
       <div id="portfolioChart"></div> 
    </>
  )
}

  export default PortfolioChart;