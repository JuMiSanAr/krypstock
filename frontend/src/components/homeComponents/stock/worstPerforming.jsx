import React, {useState} from 'react';
import { FormSelectWrapper } from "../../../styles/components/cryptoStyles/bitCoinStyles";
/*import { SelectorWrapper } from "../../../styles/components/cryptoStyles/quickTradeStyles";*/
import { StockTable } from "../../../styles/components/stockStyles/tableStyles"
import { ShrinkingComponentWrapper } from "../../../styles/globalParts/containerStyles"
import TablePagination from '@material-ui/core/TablePagination';
import {darkTheme} from '../../../styles/Themes';
import {useHistory} from 'react-router-dom';
import { TitleSpan } from '../../../styles/globalParts/textStyles';


const WorstPerformingStocks = ({loss_stock}) => {
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
            <FormSelectWrapper>
                <div className="title">
                    <TitleSpan>Top 10 loss stocks</TitleSpan>
                </div>
            </FormSelectWrapper>
            <StockTable id="loss-stocks">
                {
                    loss_stock && loss_stock.length > 0 ?
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Price</th>
                            <th>Change %</th>
                            <th>Volume</th>
                        </tr>
                    </thead>
                    : 
                    null
                }
                <tbody>
                {
                    loss_stock && loss_stock.length > 0 ?
                    loss_stock.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
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
                loss_stock && loss_stock.length > 0 ?
                <TablePagination 
                    component="div"
                    count={loss_stock.length}
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

export default WorstPerformingStocks;