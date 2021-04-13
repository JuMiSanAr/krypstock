import React, {useEffect, useState} from 'react';
import { FormSelectWrapper } from "../../../styles/components/cryptoStyles/bitCoinStyles";
/*import { SelectorWrapper } from "../../../styles/components/cryptoStyles/quickTradeStyles";*/
import { StockTable } from "../../../styles/components/stockStyles/tableStyles"
import { ShrinkingComponentWrapper } from "../../../styles/globalParts/containerStyles"
import TablePagination from '@material-ui/core/TablePagination';
import {darkTheme} from '../../../styles/Themes';


const WorstPerformingStocks = ({loss_stock}) => {

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
                    <h3>Top 10 loss stocks</h3>
                </div>
            </FormSelectWrapper>
            <StockTable id="trendy-stocks">
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
                    loss_stock.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
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
                </tbody>
            </StockTable>
            <TablePagination 
                component="div"
                count={loss_stock.length}
                page={page}
                onChangePage={handleChangePage}
                rowsPerPage={rowsPerPage}
                rowsPerPageOptions={[]}
                style={{color: darkTheme.text}}
            />
        </ShrinkingComponentWrapper>
    )
}

export default WorstPerformingStocks;