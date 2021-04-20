import Chart from "react-apexcharts";
import {allTheme} from "../../styles/Themes";

const StockMarketOvewviewChart = ({data}) => {

    const sectors = data.map(element => element.name);
    const performance = data.map (element => element.performance.toFixed(3));

    const colors = [allTheme.vibrantturquoise, allTheme.darkblue, allTheme.yellow, allTheme.vibrantorange, allTheme.green, allTheme.purple, allTheme.blue];

    const options = {
        chart: {
            background: 'none',
            type: 'bar',
            height: 200,
            width: 350,
            toolbar: {
                show: false
            }
        },
        grid: {
            padding: {
                bottom: 10
            }
        },
        xaxis: {
            type: 'category',
            categories: sectors,
            labels: {
                rotate: -45,
                rotateAlways: true,
                formatter: (val) => {
                    return val.toFixed(3);
                },
                style: {
                    colors: ['white'],
                    fontSize: '10px'
                }
            }
        },
        yaxis: {
            showAlways: true,
            labels: {
                show: 'true',
                style: {
                    colors: ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white']
                }
            }
        },
        plotOptions: {
            bar: {
                distributed: true,
                horizontal: true
            }
        },
        fill: {
            colors: colors
        },
        legend: {
            show: false
        },
        dataLabels: {
            enabled: true,
            textAnchor: 'end',
            position: 'top',
            style: {
                fontSize: '10px',
                colors: ['white'],
                fontFamily: 'Helvetica, Arial, sans-serif',
            },
            dropShadow: {
                enabled: true,
                top: 1,
                left: 1,
                blur: 1,
                opacity: 0.45
            },
        }
    };

    const series =[{
        data: performance
    }];

    return (
        <>
            {
                sectors.length && performance.length ?
                <Chart
                    options={options}
                    series={series}
                    type='bar'
                    height='300px'
                    width="330px"
                />
                : ''
            }
        </>
    );
};

export default StockMarketOvewviewChart;
