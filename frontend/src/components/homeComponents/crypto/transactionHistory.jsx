import React from 'react';
import { useSelector } from 'react-redux';
import { ShrinkingComponentWrapper } from '../../../styles/globalParts/containerStyles';
// import {TableWrapper} from '../../../styles/components/cryptoStyles/transactionHistoryStyles'
import { Table } from '../../../styles/components/cryptoStyles/cryptoTablesStyles'
import TablePagination from '@material-ui/core/TablePagination';
import Moment from 'react-moment';
import { darkTheme } from '../../../styles/Themes';
import { TitleSpan } from '../../../styles/globalParts/textStyles';

export const TransactionHistory = () => {

    const allData = useSelector(state => state.transactionsReducer.transactions);
    // console.log("TransactionHistory ~ allData", allData)

    const auth = useSelector((state => state.logInReducer.authenticated));

    //Pagination
    const [page, setPage] = React.useState(0);
    const rowsPerPage = 10;
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    return (
        <ShrinkingComponentWrapper>
            <TitleSpan>Transaction History</TitleSpan>
            <Table id="trans-history">
                {
                    allData && allData.length !== 0 && auth ?
                        <thead>
                            <tr>
                                <th>Currency</th>
                                <th>Date</th>
                                <th>Type</th>
                                <th>Amount</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        : null
                }
                <tbody>
                    {
                        allData && allData.length !== 0 && auth ?
                            allData.filter(data => data.type === 'C').slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((cryptoData, index) =>
                                    <tr key={"Stock" + index}>
                                        <td>
                                            <div className="tdDiv">
                                                {cryptoData.symbol.slice(-4) === 'USDT' ? cryptoData.symbol.slice(0, -4) : cryptoData.symbol}
                                            </div>
                                        </td>
                                        <td>
                                            <div className="tdDivDate">
                                                <Moment format="DD.MM.YY">{cryptoData.exec_time}</Moment>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="tdDivType">
                                                {cryptoData.buy_sell === "B" ? "BUY" : "SELL"}    
                                            </div>
                                        </td>
                                        <td>
                                            <div className="tdDivVolume">
                                                {Number(cryptoData.quantity).toFixed(2)}
                                            </div>
                                        </td>
                                        <td>
                                            <div className="tdDivTransacPrice">
                                                {Number(cryptoData.cost).toFixed(2)}
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
            </Table>
            {
                allData && allData.length !== 0 && auth ?
                    <TablePagination
                        component="div"
                        count={allData.filter(data => data.type === 'C').length}
                        page={page}
                        onChangePage={handleChangePage}
                        rowsPerPage={rowsPerPage}
                        rowsPerPageOptions={[]}
                        style={{ color: darkTheme.text }}
                        // backIconButtonProps={{
                        //     style: {padding: 0},
                        // }}
                        // nextIconButtonProps={{
                        //     style: {padding: 0}
                        // }}
                    />
                    : null
            }
        </ShrinkingComponentWrapper>
    )
}


// active: true
// buy_sell: "B"
// cost: "500"
// exec_time: "2021-04-15T07:42:55.376565Z"
// id: 107
// portfolio: {id: 3, name: "Eve's crypto portfolio", description: "My portfolio for crypto investment"}
// price: "5"
// quantity: "100"
// symbol: "1INCHUSDT"
// type: "C"
// user: {id: 4, username: "eve", first_name: "", last_name: "", email: "eve@hotmail.com", …}