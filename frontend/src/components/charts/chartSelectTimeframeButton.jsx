import React from "react";


const ChartTimeframeButton = (props) => {

    return (
        <select className="selector" onChange={event => props.setChart(event.target.value)}>
            <option value="day">Day</option>
            <option value="5dm">Week</option>
            <option value="1mm">Month</option>
            <option value="3m">3 months</option>
            <option value="6m">6 months</option>
            <option value="ytd">YTD</option>
            <option value="1y">Year</option>
            <option value="5y">5 years</option>
        </select>
    )
}

export default ChartTimeframeButton