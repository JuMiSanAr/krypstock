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



const Search = () => {

    const [page, setPage] = React.useState(0);
    const rowsPerPage = 10;

    const allCryptos = useSelector(state => state.cryptoReducer.allCryptos);

    const [search, setSearch] = useState("");
    const [select, setSelect] = useState("All");
    const [allStocks, setAllStocks] = useState([]);
    const [showingStocks, setShowingStocks] = useState("loading");
    const [showingCryptos, setShowingCryptos] = useState("loading");

    const dispatch = useDispatch();

    useEffect(() => {
        fetch('https://sandbox.iexapis.com/stable/stock/market/list/mostactive?token=Tpk_fec97062db224c2fb7b0b3836ab0e365')
            .then(res => res.json())
            .then(data=> {
                setAllStocks(data)
                return fetch('https://api.binance.com/api/v3/ticker/24hr')
            })
            .then(res => res.json())
            .then(data => {
                const usdtFiltered = data.filter(item => item.symbol.includes("USDT"));
                const action = allCryptosAction(usdtFiltered);
                dispatch(action);
            });
               
    }, []);

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
                            <option  value="Stock:Gainers">Stock:Gainers</option>
                            <option  value="Stock:Losers">Stock:Losers</option>
                            <option  value="Stock:Most Actives">Stock:Most Actives</option>
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
                    <div>
                     <span className="addToPortfolio">Add to portfolio <AddBoxIcon className="addIcon"/></span>
                    </div>
                    </SearchWrapperTitle>  
                   <TableContainerWrapper>
                    <TableWrapper>
                    <Table id="stocks">
                        <thead>
                            <tr>
                            <th className="headcol tableHead">Select</th>
                            <th className="tableHead">Symbol</th>
                            <th className="tableHead">Name</th>
                            <th className="tableHead">Price(Intraday)</th>
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
                            <th className="headcol tableHead">Select</th>
                            <th className="tableHead">Symbol</th>
                            <th className="tableHead">Price(Intraday)</th>
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