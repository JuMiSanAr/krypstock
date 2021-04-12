import React, {useEffect, useState} from 'react';
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



const Search = () => {

    const [page, setPage] = React.useState(0);
    const rowsPerPage = 10;

    const [allStocks, setAllStocks] = useState([]);
    const [allCryptos, setAllCryptos] = useState([]);
    const [search, setSearch] = useState("");
    const [select, setSelect] = useState("All");
    const [iexVolumeData, setiexVolumeData] = useState([]);
    const [showingStocks, setShowingStocks] = useState("loading");
    const [showingCryptos, setShowingCryptos] = useState("loading");
     
    console.log(allCryptos)

    useEffect(() => {
        fetch('https://sandbox.iexapis.com/stable/stock/market/list/iexvolume?token=Tpk_fec97062db224c2fb7b0b3836ab0e365')
            .then(res => res.json())
            .then(data=> {
                setiexVolumeData(data)
                return fetch('https://api.binance.com/api/v3/ticker/24hr')
                    .then(res => res.json())
                    .then(data => 
                        setAllCryptos(data))
            });
                
               
    }, []);


    const handleSelectChange = (val) => {
        setSelect(val)
    }

    useEffect(() => {
         if(select === "Stock" && search !== ""){
             const filteredStocks = iexVolumeData.filter(stock => stock.companyName.includes(search.replace(/^./, search[0].toUpperCase())) || stock.symbol.includes(search.toUpperCase()))
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
        if(allCryptos.lenght){
            setShowingCryptos(allCryptos.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((symbol, index) => {
                return (
                        <CryptoTable key={index} symbol={symbol}/>
                            )
            }))
        }
    }, [allCryptos])

    useEffect(() => {
        if (iexVolumeData.length){
            setShowingStocks(iexVolumeData.map((symbol, index) => {
                return (
                    <StockTable key={index} symbol={symbol}/>
                )
            }));
        }
        
    }, [iexVolumeData])

   

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
        </>
    )
}

export default Search;