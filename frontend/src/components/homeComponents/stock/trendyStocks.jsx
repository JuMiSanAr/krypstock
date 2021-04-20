import React, {useState} from 'react';
import { StockTable } from "../../../styles/components/stockStyles/tableStyles"
import { ShrinkingComponentWrapper } from "../../../styles/globalParts/containerStyles"
import TablePagination from '@material-ui/core/TablePagination';
import {darkTheme} from '../../../styles/Themes';
import {useHistory} from 'react-router-dom';
import { TitleSpan } from '../../../styles/globalParts/textStyles';


const TrendyStocks = ({stock_volume}) => {
    const history = useHistory()

    //Pagination
    // const [page, setPage] = useState(0);
    // const rowsPerPage = 10;
    // const handleChangePage = (event, newPage) => {
    //     setPage(newPage);
    // };

    const specificStockPage = (symbol) => {
        history.push(`/stock/${symbol}`)
    }

    return (
        <ShrinkingComponentWrapper>
            <TitleSpan>Top Trendy Stocks</TitleSpan>
            <StockTable id="trendy-stocks">
                {
                    stock_volume && stock_volume.length > 0 ? 
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Change</th>
                            <th>Price</th>
                            <th>Volume (M)</th>
                        </tr>
                    </thead>
                    : null
                }
                <tbody>
                {
                    stock_volume && stock_volume.length > 0 ? 
                    stock_volume
                    // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((company, index) => {
                        return (
                            <tr key={index}>
                                <td className="clickStock" onClick={()=> specificStockPage(company.symbol)}>
                                    <div className="tdDiv">
                                        {company.symbol}
                                    </div>
                                </td>
                                <td>
                                    <div className="tdDiv">
                                        {company.changePercent > 0 ? <i className="fas fa-angle-double-up" style={{color: 'green'}}></i> 
                                        : company.changePercent < 0 ? <i className="fas fa-angle-double-down" style={{color: 'red'}}></i> 
                                        : null} {company.changePercent ? Math.abs(company.changePercent * 100).toFixed(2) : '0.00' }%
                                    </div>
                                </td>
                                <td>
                                    <div className="tdDivVolume">
                                        {company.latestPrice ? company.latestPrice.toFixed(2) : '0.00' }
                                    </div>
                                </td>
                                <td>
                                    <div className="tdDivVolume">
                                        {(company.volume/1000000).toFixed(2)}
                                    </div>
                                </td>
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
            {/* {
                stock_volume && stock_volume.length > 0 ? 
                <TablePagination 
                    component="div"
                    count={stock_volume.length}
                    page={page}
                    onChangePage={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    rowsPerPageOptions={[]}
                    style={{color: darkTheme.text}}
                />
                : null
            } */}
        </ShrinkingComponentWrapper>
    )
}

export default TrendyStocks