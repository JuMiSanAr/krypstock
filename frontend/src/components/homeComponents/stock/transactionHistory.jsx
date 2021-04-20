import React, { useState} from 'react';
import { useSelector } from 'react-redux';
import { StockTable } from '../../../styles/components/stockStyles/tableStyles';
import { ShrinkingComponentWrapper } from '../../../styles/globalParts/containerStyles';
import Moment from 'react-moment';
import TablePagination from '@material-ui/core/TablePagination';
import {darkTheme} from '../../../styles/Themes';
import { TitleSpan } from '../../../styles/globalParts/textStyles';

const TransactionHistory = (props) => {

    const allData = useSelector(state => state.transactionsReducer.transactions);
    
    const [page, setPage] = useState(0);
    const rowsPerPage = 10;
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    return (
        <ShrinkingComponentWrapper>
            <TitleSpan>Transaction History</TitleSpan>
            <StockTable id="transaction-history">
                {
                    allData && allData.length !== 0 ?
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Date</th>
                            <th>Type</th>
                            <th>Volume</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    : null
                }
                <tbody>
                    {   
                        allData && allData.length !== 0 ?
                        allData.filter(data => data.type === 'S')
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map( (stockData, index) => 
                            <tr key={"Stock"+ index}>
                                <td>
                                    <div className="tdDiv">
                                        {stockData.symbol}
                                    </div>
                                </td>
                                <td>
                                    <div className="tdDivDate">
                                        <Moment format="DD.MM.YY">{stockData.exec_time}</Moment>
                                    </div>
                                </td>
                                <td>
                                    <div className="tdDivType">
                                        {stockData.buy_sell === "B" ? "BUY" : "SELL"}
                                    </div>
                                </td>
                                <td>
                                    <div className="tdDivVolume">
                                        {stockData.quantity}
                                    </div>
                                </td>
                                <td>
                                    <div className="tdDivTransacPrice">
                                        {Number(stockData.cost).toFixed(2)}
                                    </div>
                                </td>
                            </tr>
                        )
                        :
                        <tr>
                            <td colSpan="4">No transactions in your portfolio</td>
                        </tr>
                    }
                </tbody>
            </StockTable>
            {
                allData && allData.length !== 0 ?
                <TablePagination 
                    component="div"
                    count={allData.filter(data => data.type === 'S').length}
                    page={page}
                    onChangePage={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    rowsPerPageOptions={[]}
                    style={{color: darkTheme.text}}
                />
                : null

            }
        </ShrinkingComponentWrapper>
    )
}

export default TransactionHistory;