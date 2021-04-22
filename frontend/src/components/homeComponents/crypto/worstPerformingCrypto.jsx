import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ShrinkingComponentWrapper } from '../../../styles/globalParts/containerStyles';
import { Table } from '../../../styles/components/cryptoStyles/cryptoTablesStyles'
import TablePagination from '@material-ui/core/TablePagination';
import { darkTheme } from '../../../styles/Themes';
import { useHistory } from 'react-router-dom';
import { TitleSpan } from '../../../styles/globalParts/textStyles';

const WorstPerformingCrypto = () => {
    const history = useHistory()
    let allCryptos = useSelector(state => state.cryptoReducer.allCryptos)
    const [worstCryptos, setWorstCryptos] = useState([]);
    const dataAmount = 10;
    //Pagination
    // const [page, setPage] = useState(0);
    // const rowsPerPage = 4;
    // const handleChangePage = (event, newPage) => {
    //     setPage(newPage);
    // };

    useEffect(() => {
        const top10WorstCryptos = [];

        if (allCryptos.length > 0) {
            allCryptos.sort((a, b) => a.priceChangePercent - b.priceChangePercent) // sort in ascending order
            for (let i = 0; i < dataAmount; i++) {
                top10WorstCryptos.push(allCryptos[i]);
            }
        }

        setWorstCryptos(top10WorstCryptos)
    }, [allCryptos])

    const specificCryptoPage = (symbol) => {
        history.push(`/crypto/${symbol}`)
    }

    return (
        <ShrinkingComponentWrapper>
            <TitleSpan>Top 10 Losers</TitleSpan>
            <Table id="crypto-worst">
                {
                    worstCryptos !== [] && worstCryptos.length === dataAmount ?
                        <thead>
                            <tr>
                                <th>Currency</th>
                                <th>Change</th>
                                <th>Price</th>
                                <th>Volume (M)</th>
                            </tr>
                        </thead>
                        :
                        null
                }
                <tbody>
                    {worstCryptos !== [] && worstCryptos.length === dataAmount ?
                        worstCryptos
                            // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((crypto, index) =>
                                <tr key={index}>
                                    {/* <td>{worstCryptos.indexOf(crypto) + 1}</td> */}
                                    <td className="clickCrypto" onClick={() => specificCryptoPage(crypto.symbol)}>
                                        <div className="tdDiv">
                                            {crypto.symbol.slice(0, -4)}
                                        </div>
                                    </td>
                                    <td>
                                        <div className="tdDiv">
                                            {crypto.priceChangePercent > 0 ? <i className="fas fa-angle-double-up" style={{ color: 'green' }}></i> 
                                            : crypto.priceChangePercent < 0 ? <i className="fas fa-angle-double-down" style={{ color: 'red' }}></i> 
                                            : null} {Math.abs(crypto.priceChangePercent).toFixed(2)}%
                                        </div>
                                    </td>
                                    <td>
                                        <div className="tdDivVolume">
                                            {Number(crypto.lastPrice).toFixed(2)}
                                        </div>
                                    </td>
                                    <td>
                                        <div className='tdDivVolume'>
                                            {(crypto.quoteVolume / 1000000).toFixed(2)}
                                        </div>
                                    </td>
                                </tr>)
                        :
                        <tr>
                            <td colSpan='3'>No information available</td>
                        </tr>
                    }
                </tbody>
            </Table>
            {/* {
                worstCryptos && worstCryptos.length !== 0 ?
                    <TablePagination
                        component="div"
                        count={worstCryptos.length}
                        page={page}
                        onChangePage={handleChangePage}
                        rowsPerPage={rowsPerPage}
                        rowsPerPageOptions={[]}
                        style={{ color: darkTheme.text }}
                    />
                    : null
            } */}
        </ShrinkingComponentWrapper>
    )
}

export default WorstPerformingCrypto;