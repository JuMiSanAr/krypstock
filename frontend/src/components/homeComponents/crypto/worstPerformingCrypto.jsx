import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {ShrinkingComponentWrapper } from '../../../styles/globalParts/containerStyles';
import {Table} from '../../../styles/components/cryptoStyles/cryptoTablesStyles'
import TablePagination from '@material-ui/core/TablePagination';
import {darkTheme} from '../../../styles/Themes';

const WorstPerformingCrypto = () => {

    let allCryptos = useSelector(state => state.cryptoReducer.allCryptos)
    const [worstCryptos, setWorstCryptos] = useState([]);
    const dataAmount = 10;
    //Pagination
    const [page, setPage] = useState(0);
    const rowsPerPage = 4;
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    useEffect( () => {
        const top10WorstCryptos = [];
        
        console.log('topCryptos', worstCryptos)

        if (allCryptos.length > 0) {
            allCryptos.sort( (a,b) => a.priceChangePercent - b.priceChangePercent) // sort in ascending order
            for (let i = 0; i < dataAmount; i++) {
                top10WorstCryptos.push(allCryptos[i]);
            }
        }
        
        setWorstCryptos(top10WorstCryptos)
        // console.log(worstCryptos)
    }, [allCryptos] )

    const cutUSDT = (currency) => {
        let onlyCurrency = currency.split('');
        onlyCurrency.splice(-4, 4);
        onlyCurrency.join('');
        return onlyCurrency;
    }

    return (
        <ShrinkingComponentWrapper> 
            <h3>Top 10 Losers</h3>
            <Table id="crypto-worst">
                {
                    worstCryptos !== [] && worstCryptos.length === dataAmount ?
                    <thead>
                        <tr>
                        <th colSpan='2'>Currency</th>
                        <th>Price</th>
                        <th>Change %</th>
                        </tr>
                    </thead>
                    :
                    null
                }
                <tbody>
                    {worstCryptos !== [] && worstCryptos.length === dataAmount ? 
                        worstCryptos.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map( (crypto, index) => 
                        <tr key={index}>
                            <td>{worstCryptos.indexOf(crypto) + 1}</td>
                            <td>{cutUSDT(crypto.symbol)}</td>
                            <td>{Number(crypto.lastPrice).toFixed(2)}</td>
                            <td>
                                {crypto.priceChangePercent > 0 ? <i className="fas fa-angle-double-up" style={{color: 'green'}}></i> : crypto.priceChangePercent < 0 ? <i className="fas fa-angle-double-down" style={{color: 'red'}}></i> : null} 
                                {Math.abs(crypto.priceChangePercent).toFixed(2)}%
                            </td>
                        </tr>)
                        :
                        <tr>
                            <td colSpan='3'>No information available</td>
                        </tr>
                    }
                </tbody>
            </Table>
            {
                worstCryptos && worstCryptos.length !== 0 ?
                <TablePagination 
                    component="div"
                    count={worstCryptos.length}
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

export default WorstPerformingCrypto;