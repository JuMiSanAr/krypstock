import React, {useState} from 'react';
import { StockTable } from "../../../styles/components/stockStyles/tableStyles"
import { ShrinkingComponentWrapper } from "../../../styles/globalParts/containerStyles"
import TablePagination from '@material-ui/core/TablePagination';
import {darkTheme} from '../../../styles/Themes';


const TrendyStocks = ({stock_volume}) => {

    //Pagination
    const [page, setPage] = useState(0);
    const rowsPerPage = 4;
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    return (
        <ShrinkingComponentWrapper>
            <h3>Trendy Stocks Today</h3>
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
                    stock_volume.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((company, index) => {
                        return (
                            <tr key={index}>
                                <td>{company.companyName}</td>
                                <td>{company.latestPrice ? company.latestPrice.toFixed(2) : '0.00' }</td>
                                <td>{company.changePercent > 0 ? <i className="fas fa-angle-double-up" style={{color: 'green'}}></i> : company.changePercent < 0 ? <i className="fas fa-angle-double-down" style={{color: 'red'}}></i> : null} {company.changePercent ? company.changePercent.toFixed(2) : '0.00' }</td>
                                <td>{company.volume}</td>
                            </tr>
                        )
                    })
                }

                    {/*<tr>
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
                count={stock_volume.length}
                page={page}
                onChangePage={handleChangePage}
                rowsPerPage={rowsPerPage}
                rowsPerPageOptions={[]}
                style={{color: darkTheme.text}}
            />
        </ShrinkingComponentWrapper>
    )
}

export default TrendyStocks