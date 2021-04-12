import React, {useEffect, useState} from 'react';
import FooterNav from '../components/footerNav';
// import {SearchPageInput} from "../styles/globalParts/inputStyles";
import {
    AllComponentsWrapper,
} from "../styles/globalParts/containerStyles";
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import AddBoxIcon from '@material-ui/icons/AddBox';
import {ContentWrapper, SearchPageInput, 
    Title, SearchWrapperTitle, 
    TableContainerWrapper, Table, TableWrapper } from '../styles/pages/searchStyles'

const Search = () => {

    const [allStocks, setAllStocks] = useState([]);
    const [allCryptos, setAllCryptos] = useState([]);
    const [search, setSearch] = useState([]);
    const [select, setSelect] = useState("All");
    const [iexVolumeData, setiexVolumeData] = useState([]);

    useEffect(() => {
        fetch('https://sandbox.iexapis.com/stable/stock/market/list/iexvolume?token=Tpk_fec97062db224c2fb7b0b3836ab0e365')
            .then(res => res.json())
            .then(data=> setiexVolumeData(data))
    }, []);

    const handleSelectChange = (val) => {
        setSelect(val)
    }

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
                    <Table id="crypto">
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
                            {
                                iexVolumeData.length ?
                                iexVolumeData.map((symbol, index) => {
                                    return (
                                        <tr>
                                        <td className="headcol"><input type="checkbox" name="muhRadio" value=""/></td>
                                        <td>{symbol.symbol}</td>
                                        <td>{symbol.companyName}</td>
                                        <td>{symbol.latestPrice}</td>
                                        <td>{symbol.change.toFixed(2)}</td>
                                        <td>{symbol.changePercent.toFixed(2)}</td>
                                        <td>{symbol.volume}</td>
                                        <td>{symbol.marketCap}</td>
                                        <td><TrendingUpIcon/> {symbol.high}</td>
                                        </tr>
                                    )
                                }) : "...Please Wait I am Loading now! "
                            }
                            
                        </tbody>
                    </Table>
                    </TableWrapper>
                    </TableContainerWrapper>
                    </AllComponentsWrapper>
                {/* <FooterNav/> */}
        </>
    )
}

export default Search;