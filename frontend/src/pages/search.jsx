import React, { useEffect, useState } from 'react';
import {
    AllComponentsWrapper, ShrinkingComponentWrapper,
} from "../styles/globalParts/containerStyles";
// import AddBoxIcon from '@material-ui/icons/AddBox';
import {
SearchPageInput,
SearchWrapperTitle,
 Table, TableWrapper
} from '../styles/pages/searchStyles'
import { CryptoTable } from '../components/searchCryptoStockTable/cryptoTable';
// import TablePagination from '@material-ui/core/TablePagination';
import { StockTable } from '../components/searchCryptoStockTable/stockTable';
import { allCryptosAction } from "../store/actions/cryptoActions";
import { useDispatch, useSelector } from "react-redux";
import { allStockSymbolsAction, searchedStocksAction } from "../store/actions/stocksActions";
import { iexSandboxKey } from "../store/constants";
import { CryptoModal } from '../components/quickTradeModal/crypto';
import { StockModal } from '../components/quickTradeModal/stock';
import { Content } from '../styles/components/buttonStyles';
import {NaviWrapper } from '../styles/components/naviStyles/menuStyles';
import Burger from '../components/navi/burger';
import Menu from '../components/navi/menu';


const Search = () => {

    //Modal 
    const [showStockModal, setStockShowModal] = useState(false);
    const [showCryptoModal, setCryptoShowModal] = useState(false);
    const [symbolCrypto, setSymbolCrypto] = useState();
    const [stockName, setStockName] = useState();
    const [stockSymbol, setStockSymbol] = useState();


    /***********/

    const [open, setOpen] = useState(false);

    const [page, setPage] = React.useState(0);
    const rowsPerPage = 10;

    const allCryptos = useSelector(state => state.cryptoReducer.allCryptos);

    const [search, setSearch] = useState("");
    const [select, setSelect] = useState("All");
    const [showingCryptos, setShowingCryptos] = useState([]);

    const [currentStockSymbols, setCurrentStockSymbols] = useState('');

    const allSymbols = useSelector(state => state.stocksReducer.allSymbols);
    const searchedStocks = useSelector(state => state.stocksReducer.searchedStocks);

    const dispatch = useDispatch();

    useEffect(() => {
        if (currentStockSymbols.length) {
            fetch(`https://sandbox.iexapis.com/stable/stock/market/batch?types=quote&symbols=${currentStockSymbols}&token=${iexSandboxKey}`)
                .then(res => res.json())
                .then(data => {
                    const fetchedData = Object.values(data).map(singleData => singleData.quote);
                    const notNullData = fetchedData.filter(asset => asset.latestPrice)
                    const action = searchedStocksAction(notNullData.slice(0, 10));
                    dispatch(action);
                })
        }
    }, [currentStockSymbols]);

    useEffect(() => {
        fetch('https://api.binance.com/api/v3/ticker/24hr')
            .then(res => res.json())
            .then(data => {
                const usdtFiltered = data.filter(item => item.symbol.includes("USDT") &&
                    !((item.symbol).slice(0, 4) === 'USDT') &&
                    !item.symbol.includes("UPUSDT") &&
                    !item.symbol.includes("BULLUSDT") &&
                    !item.symbol.includes("BEARUSDT") &&
                    !item.symbol.includes("STUSDT") &&
                    !item.symbol.includes("DOWNUSDT") &&
                    !item.symbol.includes("ESUSDT"));
                const action = allCryptosAction(usdtFiltered);
                dispatch(action);
            });

        if (!allSymbols.length) {
            fetch(`https://sandbox.iexapis.com/stable/ref-data/symbols?token=${iexSandboxKey}`)
                .then(res => res.json())
                .then(data => {
                    const symbolNameList = data.map(symbol => {
                        return {
                            symbol: symbol.symbol,
                            name: symbol.name
                        }
                    })
                    const action = allStockSymbolsAction(symbolNameList);
                    dispatch(action);
                });
        }

    }, []);

    useEffect(() => {
        if (allSymbols.length) {
            let string = '';

            allSymbols.slice(0, 21).forEach((symbol, index) => {

                string += symbol.symbol;
                if (index !== 20) {
                    string += ',';
                }
            })

            setCurrentStockSymbols(string);
        }
    }, [allSymbols]);

    const handleSelectChange = (val) => {
        setSelect(val)
    }

    const searchHandler = () => {
        if (select === "Stock" && search !== "") {
            const exactMatches = allSymbols.filter(symbol => symbol.symbol.toLowerCase() === search.toLowerCase() || symbol.name.toLowerCase() === search.toLowerCase());
            const filteredSymbols = allSymbols.filter(symbol => (symbol.symbol.toLowerCase().includes(search.toLowerCase()) || symbol.name.toLowerCase().includes(search.toLowerCase())) && !exactMatches.includes(symbol));
            const finalSymbols = exactMatches.concat(filteredSymbols);
            let string = '';

            finalSymbols.slice(0, 21).forEach((symbol, index) => {

                string += symbol.symbol;
                if (index !== 20) {
                    string += ',';
                }
            })

            setCurrentStockSymbols(string);
            //  const filteredStocks = allStocks.filter(stock => stock.companyName.includes(search.replace(/^./, search[0].toUpperCase())) || stock.symbol.includes(search.toUpperCase()))
            //  setShowingStocks(filteredStocks.map((symbol, index) => {
            //     return (
            //         <StockTable key={index} symbol={symbol}/>
            //     )
            // }))
        } else if (select === "Crypto" && search !== "") {
            const filteredCrypto = allCryptos.filter(crypto => crypto.symbol.includes(search.toUpperCase()))
            setShowingCryptos(filteredCrypto.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((symbol, index) => {
                return (
                    <CryptoTable setStockSymbol={setStockSymbol} setSymbolCrypto={setSymbolCrypto} setCryptoShowModal={setCryptoShowModal} key={index} symbol={symbol} />
                )
            }))
        } else if (search !== '') {
            const filteredCrypto = allCryptos.filter(crypto => crypto.symbol.includes(search.toUpperCase()));
            setShowingCryptos(filteredCrypto.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((symbol, index) => {
                return (
                    <CryptoTable setStockSymbol={setStockSymbol} setSymbolCrypto={setSymbolCrypto} setCryptoShowModal={setCryptoShowModal} key={index} symbol={symbol} />
                )
            }))

            const exactMatches = allSymbols.filter(symbol => symbol.symbol.toLowerCase() === search.toLowerCase() || symbol.name.toLowerCase() === search.toLowerCase());
            const filteredSymbols = allSymbols.filter(symbol => (symbol.symbol.toLowerCase().includes(search.toLowerCase()) || symbol.name.toLowerCase().includes(search.toLowerCase())) && !exactMatches.includes(symbol));
            const finalSymbols = exactMatches.concat(filteredSymbols);
            let string = '';

            finalSymbols.slice(0, 21).forEach((symbol, index) => {
                string += symbol.symbol;
                if (index !== 20) {
                    string += ',';
                }
            })
            setCurrentStockSymbols(string);
        } else {
            if (allCryptos.length) {
                setShowingCryptos(allCryptos.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((symbol, index) => {
                    return (
                        <CryptoTable setStockSymbol={setStockSymbol} setSymbolCrypto={setSymbolCrypto} setCryptoShowModal={setCryptoShowModal} key={index} symbol={symbol} />
                    )
                }))
            }
        }
    }

    useEffect(() => {
        if (allCryptos.length) {
            setShowingCryptos(allCryptos.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((symbol, index) => {
                return (
                    <CryptoTable setStockSymbol={setStockSymbol} setSymbolCrypto={setSymbolCrypto} setCryptoShowModal={setCryptoShowModal} key={index} symbol={symbol} />
                )
            }))
        }
    }, [allCryptos])

    // const handleChangePage = (event, newPage) => {
    //     setPage(newPage);
    // };

    return (
        <> 
                <CryptoModal  symbol = {symbolCrypto} showCryptoModal={showCryptoModal} setCryptoShowModal={setCryptoShowModal}/> 
                <StockModal stockSymbol={stockSymbol}  symbol = {stockName} showStockModal={showStockModal} setStockShowModal={setStockShowModal}/> 
                <NaviWrapper>
                <div>
                    <Burger open={open} setOpen={setOpen}/> 
                    <Menu open={open} setOpen={setOpen} />  
                </div>  
                <div className="heading">
                <h2>Search</h2>
                </div>
                </NaviWrapper>
                  <SearchPageInput>
                  <input placeholder="Search..." onChange={event => setSearch(event.target.value)}/>
                        <select name="" onChange={(val) => handleSelectChange(val.target.value)} >
                            <option id="option-all" value="All">All</option>
                            <option id="option-crypto" value="Crypto">Crypto</option>
                            <option id="option-stock" value="Stock">Stock</option>
                        </select>
                        <Content type="submit" onClick={() => searchHandler()}><i className="fas fa-search"></i></Content>
                    </SearchPageInput>
         
                    <AllComponentsWrapper>
                    <SearchWrapperTitle>
                    {/* <Title>
                        {select}
                    </Title> */}
                </SearchWrapperTitle>
            
                    {
                        select !== "Stock" ?
                        <ShrinkingComponentWrapper>
                            <TableWrapper>
                                {<Table id="crypto">
                                    <thead>
                                        <tr>
                                            <th className="tableHead">Buy</th>
                                            <th className="tableHead">Symbol</th>
                                            <th className="tableHead">Price (Latest)</th>
                                            <th className="tableHead">Change%</th>
                                            {/*<th className="tableHead">1 Day Chart</th>*/}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {showingCryptos}
                                    </tbody>
                                </Table>}
                            </TableWrapper>
                        </ShrinkingComponentWrapper>
                            : ''
                    }

                    {
                        select !== "Crypto" ?
                        <ShrinkingComponentWrapper>
                            <TableWrapper>
                                <Table id="stocks">
                                    <thead>
                                        <tr>
                                            <th className="tableHead">Buy</th>
                                            <th className="tableHead">Symbol</th>
                                            <th className="tableHead">Price (Latest)</th>
                                            <th className="tableHead">Change%</th>
                                            {/*<th className="tableHead">1 Day Chart</th>*/}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {searchedStocks ? searchedStocks.map((symbol, index) => {
                                            return (
                                                <StockTable setStockSymbol={setStockSymbol} setStockShowModal={setStockShowModal} setStockName={setStockName} key={index} symbol={symbol} />
                                            )
                                        }) : ''}
                                    </tbody>
                                </Table>
                            </TableWrapper>
                        </ShrinkingComponentWrapper>
                            : ''
                    }
             
            </AllComponentsWrapper>
        </>
    )
}

export default Search;
