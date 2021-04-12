import React from "react";

const ChartTimeCrypto = (props) => {

    return (
        <select className="selector" onChange={event => props.setChart2(event.target.value)}>
            <option value="1d" >Day</option>
            <option value="1w" >Week</option>
            <option value="1m">Month</option>
            <option value="3m">3 months</option>
            <option value="6m">6 months</option>
            <option value="1y">Year</option>
            <option value="5y">5 years</option>
        </select>
    )
}

export default ChartTimeCrypto