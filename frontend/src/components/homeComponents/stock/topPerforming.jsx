import React, {useState} from 'react';
import { FormSelectWrapper } from "../../../styles/components/cryptoStyles/bitCoinStyles";
// import { SelectorWrapper } from "../../../styles/components/cryptoStyles/quickTradeStyles";
import { StockTable } from "../../../styles/components/stockStyles/tableStyles"
import { ShrinkingComponentWrapper } from "../../../styles/globalParts/containerStyles"
import TablePagination from '@material-ui/core/TablePagination';
import {darkTheme} from '../../../styles/Themes';

const TopPerformingStocks = ({gain_stock}) => {

    //Pagination
    const [page, setPage] = useState(0);
    const rowsPerPage = 4;
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    return (
        <ShrinkingComponentWrapper>
            <FormSelectWrapper>
                <div className="title">
                    <h3>Top 10 gain stocks</h3>
                </div>
               {/* <SelectorWrapper>
                    <div className="buySell">
                        <select className="selector">
                            <option value="today">Today</option>
                            <option value="one-week">1 Week</option>
                            <option value="one-month">1 Month</option>
                            <option value="one-year">1 Year</option>
                        </select>
                    </div>
                </SelectorWrapper>*/}
            </FormSelectWrapper>  
            <StockTable id="top-performing">
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Price</th>
                        <th>Change %</th>
                        <th>Volume</th>
                    </tr>
                </thead>
                <tbody>

                {
                    gain_stock.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((data, index) => {
                        return (
                            <tr key={index}>
                        <td>{data.companyName}</td>
                        <td>{data.latestPrice.toFixed(2)}</td>
                        <td>
                            {data.changePercent > 0 ? <i className="fas fa-angle-double-up" style={{color: 'green'}}></i> : data.changePercent < 0 ? <i className="fas fa-angle-double-down" style={{color: 'red'}}></i> : null} 
                            {Math.abs(data.changePercent * 100).toFixed(2)}%
                        </td>
                        <td>{data.volume}</td>
                    </tr>
                        )
                    })
                }

                  {/*  <tr>
                        <td>ABC</td>
                        <td>520</td>
                        <td>20.20%</td>
                        <td>1.3M</td>
                    </tr>
                    <tr>
                        <td>ABC</td>
                        <td>520</td>
                        <td>20.20%</td>
                        <td>1.3M</td>
                    </tr>*/}
                </tbody>
            </StockTable>
            <TablePagination 
                component="div"
                count={gain_stock.length}
                page={page}
                onChangePage={handleChangePage}
                rowsPerPage={rowsPerPage}
                rowsPerPageOptions={[]}
                style={{color: darkTheme.text}}
            />
        </ShrinkingComponentWrapper>
    )
}

export default TopPerformingStocks;