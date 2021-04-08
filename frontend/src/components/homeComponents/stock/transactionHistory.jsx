import React, {useEffect, useState} from 'react';
import transactionFetch from '../../../store/fetches/transactionFetches';
import { StockTable } from '../../../styles/components/stockStyles/tableStyles';
import { ShrinkingComponentWrapper } from '../../../styles/globalParts/containerStyles';
import Moment from 'react-moment';
import TablePagination from '@material-ui/core/TablePagination';
import {darkTheme, lightTheme} from '../../../styles/Themes';
import { FormHelperText } from '@material-ui/core';

const TransactionHistory = (props) => {

    const [allStocksData, setAllStocksData] = useState([]);
    const [page, setPage] = React.useState(1);
    const rowsPerPage = 4;
    let currentTheme = (({theme}) => theme);

    useEffect(() => {
        transactionFetch()
            .then(data => {
                console.log("data.results", data.results);
                const stocksOnlyData = data.results.filter(stockData => stockData.type === "S")
                console.log("stocksOnlyData", stocksOnlyData)
                setAllStocksData(stocksOnlyData);
            })
    }, []);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    return (
        <ShrinkingComponentWrapper>
            <h3>Transaction History</h3>
            <StockTable id="transaction-history">
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th>Transaction</th>
                    </tr>
                </thead>
                <tbody>
                    {   
                        allStocksData !== [] ?
                        allStocksData
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map( (stockData, index) => 
                            <tr key={"Stock"+ index}>
                                <td>{stockData.symbol}</td>
                                <td><Moment format="DD.MM.YY">{stockData.exec_time}</Moment></td>
                                <td>{stockData.cost}</td>
                                <td>{stockData.buy_sell === "B" ? "BUY" : "SELL"}</td>
                            </tr>
                        )
                        :
                        <tr>
                            <td>No stocks available in your portfolio</td>
                        </tr>
                    }
                </tbody>
            </StockTable>
            
            {/* {
                ({ theme }) => theme === lightTheme ?  */}
                {/* <TablePagination 
                    component="div"
                    count={allStocksData.length}
                    page={page}
                    onChangePage={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    rowsPerPageOptions={[]}
                    style={{color: lightTheme.text}}
                />
                :  */}
                <TablePagination 
                    component="div"
                    count={allStocksData.length}
                    page={page}
                    onChangePage={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    rowsPerPageOptions={[]}
                    style={{color: darkTheme.text}}
                />
            {/* }        */}
        </ShrinkingComponentWrapper>
    )
}

export default TransactionHistory;