import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {ShrinkingComponentWrapper } from '../../../styles/globalParts/containerStyles';
import {Table} from '../../../styles/components/cryptoStyles/cryptoTablesStyles'
import TablePagination from '@material-ui/core/TablePagination';
import {darkTheme} from '../../../styles/Themes';

const TrendyCrypto = () => {

    let allCryptos = useSelector(state => state.cryptoReducer.allCryptos)
    const [trendyCryptos, setTrendyCryptos] = useState([]);
    const dataAmount = 20;
    //Pagination
    const [page, setPage] = useState(0);
    const rowsPerPage = 4;
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    useEffect( () => {
        const top20TrendyCryptos = [];

        if (allCryptos.length > 0) {
            allCryptos.sort( (a,b) => b.quoteVolume - a.quoteVolume ) // sort in descending order
            for (let i = 0; i < dataAmount; i++) {
                top20TrendyCryptos.push(allCryptos[i]);
                // console.log('top20trendyCryptos', top20TrendyCryptos)
            }
        }
        
        setTrendyCryptos(top20TrendyCryptos)
        // console.log('allCryptos', allCryptos)
    }, [allCryptos] )

    const cutUSDT = (currency) => {
        let onlyCurrency = currency.split('');
        onlyCurrency.splice(-4, 4);
        onlyCurrency.join('');
        return onlyCurrency;
    }

    // const numberWithCommas = (number) => {
    //     return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // }

    return (
        <ShrinkingComponentWrapper> 
            <h3>Top 20 Trendy Currencies</h3>
            <Table id="crypto">
                {
                    trendyCryptos !== [] && trendyCryptos.length === dataAmount ?
                    <thead>
                        <tr>
                        <th colSpan='2'>Currency</th>
                        <th>Price</th>
                        <th>Change %</th>
                        <th>Volume in Million (USDT)</th>
                        </tr>
                    </thead>
                    :
                    null
                }
                <tbody>
                    {trendyCryptos !== [] && trendyCryptos.length === dataAmount ? 
                        trendyCryptos.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map( (crypto, index) => 
                        <tr key={index}>
                            <td>{trendyCryptos.indexOf(crypto) + 1}</td>
                            <td>{cutUSDT(crypto.symbol)}</td>
                            <td>{Number(crypto.lastPrice).toFixed(2)}</td>
                            {/* <td>{numberWithCommas(crypto.lastPrice)}</td> */}
                            <td>
                                {crypto.priceChangePercent > 0 ? <i className="fas fa-angle-double-up" style={{color: 'green'}}></i> : crypto.priceChangePercent < 0 ? <i className="fas fa-angle-double-down" style={{color: 'red'}}></i> : null} 
                                {Math.abs(Number(crypto.priceChangePercent)).toFixed(2)}%
                            </td>
                            <td>{(crypto.quoteVolume / 1000000).toFixed(2)}</td>
                        </tr>)
                        :
                        <tr>
                            <td colSpan='3'>No information available</td>
                        </tr>
                    }
                </tbody>
            </Table>
            {
                trendyCryptos && trendyCryptos.length !== dataAmount ?
                <TablePagination 
                    component="div"
                    count={trendyCryptos.length}
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

export default TrendyCrypto;