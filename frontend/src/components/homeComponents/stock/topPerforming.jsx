import React, {useState} from 'react';
// import { SelectorWrapper } from "../../../styles/components/cryptoStyles/quickTradeStyles";
import { StockTable } from "../../../styles/components/stockStyles/tableStyles"
import { ShrinkingComponentWrapper } from "../../../styles/globalParts/containerStyles"
import TablePagination from '@material-ui/core/TablePagination';
import {darkTheme} from '../../../styles/Themes';
import {useHistory} from 'react-router-dom';

const TopPerformingStocks = ({gain_stock}) => {

    const history = useHistory()

    //Pagination
    const [page, setPage] = useState(0);
    const rowsPerPage = 4;
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const specificStockPage = (symbol) => {
        history.push(`/stock/${symbol}`)
    }

    return (
        <ShrinkingComponentWrapper>
                <h3>Top 10 gain stocks</h3>
            <StockTable id="top-performing">
                {
                    gain_stock && gain_stock.length > 0 ?
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Price</th>
                            <th>Change %</th>
                            <th>Volume</th>
                        </tr>
                    </thead>
                    : null
                }
                <tbody>
                    {
                        gain_stock && gain_stock.length > 0 ?  
                        gain_stock.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((data, index) => {
                            return (
                                <tr key={index}>
                                    <td className="clickStock" onClick={()=> specificStockPage(data.symbol)}>{data.companyName}</td>
                                    <td>{data.latestPrice.toFixed(2)}</td>
                                    <td>
                                        {data.changePercent > 0 ? <i className="fas fa-angle-double-up" style={{color: 'green'}}></i> : data.changePercent < 0 ? <i className="fas fa-angle-double-down" style={{color: 'red'}}></i> : null} 
                                        {Math.abs(data.changePercent * 100).toFixed(2)}%
                                    </td>
                                    <td>{data.volume}</td>
                                </tr>
                            )
                        })
                        : 
                        <tr>
                            <td colSpan='4'>No information available</td>
                        </tr>
                    }
                </tbody>
            </StockTable>
            {
                gain_stock && gain_stock.length > 0 ? 
                <TablePagination 
                    component="div"
                    count={gain_stock.length}
                    page={page}
                    onChangePage={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    rowsPerPageOptions={[]}
                    style={{color: darkTheme.text}}
                />
                :
                null
            }
        </ShrinkingComponentWrapper>
    )
}

export default TopPerformingStocks;