import React, {useEffect, useState} from 'react';
import FooterNav from '../components/footerNav';
import {
    AllComponentsWrapper,
} from "../styles/globalParts/containerStyles";
import AddBoxIcon from '@material-ui/icons/AddBox';
import {ContentWrapper, SearchPageInput, 
    Title, SearchWrapperTitle, 
    TableContainerWrapper, Table, TableWrapper } from '../styles/pages/searchStyles'
import { CryptoTable } from '../components/searchCryptoStockTable/cryptoTable';
import TablePagination from '@material-ui/core/TablePagination';
import { StockTable } from '../components/searchCryptoStockTable/stockTable';
import {allCryptosAction} from "../store/actions/cryptoActions";
import {useDispatch, useSelector} from "react-redux";
import {allStocksAction, allStockSymbolsAction, searchedStocksAction} from "../store/actions/stocksActions";
import {iexSandboxKey} from "../store/constants";

const Search = () => {

    const [page, setPage] = React.useState(0);
    const rowsPerPage = 10;

    const allCryptos = useSelector(state => state.cryptoReducer.allCryptos);

    const [search, setSearch] = useState("");
    const [select, setSelect] = useState("All");
    const [allStocks, setAllStocks] = useState([]);
    const [showingStocks, setShowingStocks] = useState([]);
    const [showingCryptos, setShowingCryptos] = useState([]);

    const [currentStockSymbols, setCurrentStockSymbols] = useState('');

    const allSymbols = useSelector(state => state.stocksReducer.allSymbols);

    const dispatch = useDispatch();

    useEffect(() => {
        if (currentStockSymbols.length) {
            fetch(`https://sandbox.iexapis.com/stable/stock/market/batch?types=quote&symbols=${currentStockSymbols}&token=${iexSandboxKey}`)
                .then(res => res.json())
                .then(data=> {
                    const action = searchedStocksAction(data);
                    dispatch(action);
                    setAllStocks(data);
            })
        }
    }, [currentStockSymbols]);

    useEffect(() => {
        fetch('https://api.binance.com/api/v3/ticker/24hr')
            .then(res => res.json())
            .then(data => {
                const usdtFiltered = data.filter(item => item.symbol.includes("USDT"));
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

            allSymbols.slice(0, 11).forEach((symbol, index) => {
                string += symbol.symbol;
                if (index !== 10) {
                    string += ',';
                }
            })

            setCurrentStockSymbols(string);
        }
    }, [allSymbols]);

    const handleSelectChange = (val) => {
        setSelect(val)
    }

    useEffect(() => {
         if(select === "Stock" && search !== ""){
             const filteredStocks = allStocks.filter(stock => stock.companyName.includes(search.replace(/^./, search[0].toUpperCase())) || stock.symbol.includes(search.toUpperCase()))
             setShowingStocks(filteredStocks.map((symbol, index) => {
                return (
                    <StockTable key={index} symbol={symbol}/>
                )
            }))
            }else if(select === "Crypto" && search !== ""){
                const filteredCrypto = allCryptos.filter(crypto => crypto.symbol.includes(search.toUpperCase()))
                setShowingCryptos(filteredCrypto.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((symbol, index) => {
                return (
                    <CryptoTable key={index} symbol={symbol}/>
                )
            }))
            }
    }, [search]);


    useEffect(() => {
        if(allCryptos.length){
            setShowingCryptos(allCryptos.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((symbol, index) => {
                return (
                    <CryptoTable key={index} symbol={symbol}/>
                )
            }))
        }
    }, [allCryptos])

    useEffect(() => {
        if (allStocks.length){
            setShowingStocks(allStocks.map((symbol, index) => {
                return (
                    <StockTable key={index} symbol={symbol}/>
                )
            }));
        }
        
    }, [allStocks])

   


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    return (
        <>          
                  <ContentWrapper>
                      <img src="https://res.cloudinary.com/tennam/image/upload/v1618181574/Propulsion/1393720.jpg" alt="" /> 
                  <SearchPageInput>
                        <select name="" onChange={(val) => handleSelectChange(val.target.value)} >
                            <option value="All">All</option>
                            <option  value="Crypto">Crypto</option>
                            <option  value="Stock">Stock</option>
                        </select>
                        <input placeholder="Search....." onChange={event => setSearch(event.target.value)}/>
                        <button type="submit">Search</button>
                    </SearchPageInput>
                    </ContentWrapper>
                    <AllComponentsWrapper>
                    <Title>
                      {select}
                    </Title>
                    <SearchWrapperTitle>
                    </SearchWrapperTitle>  
                   <TableContainerWrapper>
                    <TableWrapper>
                    <Table id="stocks">
                        <thead>
                            <tr>
                            <th className="headcol tableHead">Buy</th>
                            <th className="tableHead">Symbol</th>
                            <th className="tableHead">Name</th>
                            <th className="tableHead">Price (Latest)</th>
                            <th className="tableHead">Change</th>
                            <th className="tableHead">Change%</th>
                            <th className="tableHead">24h Volume</th>
                            <th className="tableHead">Mkt Cap</th>
                            <th className="tableHead">1 Day Chart</th>
                            </tr>
                        </thead>
                        <tbody>
                            {showingStocks}
                        </tbody>
                    </Table>
                    </TableWrapper>
                    <TableWrapper>
                    { <Table id="crypto">
                        <thead>
                            <tr>
                            <th className="headcol tableHead">Buy</th>
                            <th className="tableHead">Symbol</th>
                            <th className="tableHead">Price (Latest)</th>
                            <th className="tableHead">Change</th>
                            <th className="tableHead">Change%</th>
                            <th className="tableHead">24h Volume</th>
                            <th className="tableHead">1 Day Chart</th>
                            </tr>
                        </thead>
                        <tbody>
                            {showingCryptos}
                        </tbody>
                        {
                        allCryptos && allCryptos.length !== 0 ?
                        <TablePagination 
                            component="div"
                            count={allCryptos.length}
                            page={page}
                            onChangePage={handleChangePage}
                            rowsPerPage={rowsPerPage}
                            rowsPerPageOptions={[]}
                            // style={{color: darkTheme.text}}
                        />
                        : null

                        }
                    </Table> }
                    </TableWrapper>
                   
                    </TableContainerWrapper>
                    </AllComponentsWrapper>
                {/* <FooterNav/> */}
        </>
    )
}

export default Search;