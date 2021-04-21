import React, {useEffect} from 'react';
import {createChart} from "lightweight-charts";

const PortfolioChart = ({data}) => {

  const demoHardcodedValues = [
      {time: '2021-04-07', value: 0},
      {time: '2021-04-08', value: 2439.51},
      {time: '2021-04-09', value: 4540.41},
      {time: '2021-04-10', value: 5473.57},
      {time: '2021-04-11', value: 7583.15},
      {time: '2021-04-12', value: 7302.51},
      {time: '2021-04-13', value: 6291.02},
      {time: '2021-04-14', value: 6864.05},
      {time: '2021-04-15', value: 6964.25},
      {time: '2021-04-16', value: 5362.05},
      {time: '2021-04-17', value: 5124.59},
      {time: '2021-04-18', value: 6564.55},
      {time: '2021-04-19', value: 7864.05},
      {time: '2021-04-20', value: 6843.00},
  ]

  useEffect(() => {

    let graphData = [];
      data.reverse().forEach((transaction) => {
      const stringDate = transaction.exec_time.slice(0, 10)
          if (transaction.active) {
              if (!graphData.length) {
                  graphData.push({
                      time: stringDate,
                      value: parseFloat(transaction.cost)
                  })
              } else {

                  const lastItem = graphData[graphData.length -1];

                  if (stringDate === lastItem.time) {
                      if (transaction.buy_sell === "B") {
                          lastItem.value += parseFloat(transaction.cost)
                      } else {
                          lastItem.value -= parseFloat(transaction.cost)
                      }
                  } else {
                      if (transaction.buy_sell === "B") {
                          graphData.push({
                              time: stringDate,
                              value: lastItem.value + parseFloat(transaction.cost)
                          })
                      } else {
                          graphData.push({
                              time: stringDate,
                              value: lastItem.value - parseFloat(transaction.cost)
                          })
                      }
                  }
              }
          }
    })

    console.log(graphData)
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
    // demoHardcodedValues
  );
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [data])
  
   
  return (
    <>
       <div id="portfolioChart"></div> 
    </>
  )
}

  export default PortfolioChart;