import React, {useEffect, useState} from 'react';
import FooterNav from '../components/footerNav';
// import {SearchPageInput} from "../styles/globalParts/inputStyles";
import {

    AllComponentsWrapper,
    ShrinkingComponentWrapper,

} from "../styles/globalParts/containerStyles";
import {lightTheme, darkTheme} from '../styles/Themes'
import styled from 'styled-components';

const ContentWrapper = styled.div`
   img{
       width: 100%;
       height: 400px;
       margin-top:-200px;
   }
`;
const SearchPageInput = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: -30px;
    
    select{
       
        height: 45px;
        width: 294px;
        /* margin-right: 5px; */
        border: none;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        font-size:20px;
        padding: 5px 0 5px 30px;
        margin: 5px;
        cursor: pointer;
        color: ${({ theme }) => theme === lightTheme ? darkTheme.text  : lightTheme.text};
        background-color: ${({ theme }) => theme === lightTheme ? darkTheme.background  : lightTheme.background };
        /* appearance: none;
        ::-ms-expand{
          display: none;  
        } */
        :focus{
            outline: none;
}
    }
    input{
        height: 43px;
        width: 300px;
        margin-right: 5px;
        border:none;
        text-align: center;
        font-size:20px;
        margin: 5px;
        color: ${({ theme }) => theme === lightTheme ? darkTheme.text  : lightTheme.text};
        background-color: ${({ theme }) => theme === lightTheme ? darkTheme.background  : lightTheme.background };
        :focus{
            outline: none;
        }
        ::placeholder {
            color: ${({ theme }) => theme === lightTheme ? darkTheme.text  : lightTheme.text};
}
    }
    button{
        height: 45px;
        width: 294px;
        border: none;
        padding: 5px;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        font-size:20px;
        margin: 5px;
        cursor: pointer;
        color: ${({ theme }) => theme === lightTheme ? darkTheme.text  : lightTheme.text};
        background-color: ${({ theme }) => theme === lightTheme ? darkTheme.background  : lightTheme.background };
        :focus{
            outline: none;
        }
    }
`;

const Title = styled.h1`
    width: 100vw;
    display: flex;
    justify-content: center;
`;

const Search = () => {

    const [allStocks, setAllStocks] = useState([]);
    const [allCryptos, setAllCryptos] = useState([]);

    const [search, setSearch] = useState([])

    useEffect(() => {

    }, []);

    return (
        <>         
                
                  <ContentWrapper>
                   <img src="https://res.cloudinary.com/tennam/image/upload/v1618061102/Propulsion/download_1.jpg" alt="" />
                   
                    <SearchPageInput>
                        <select name="" id="">
                            <option value="">All</option>
                            <option value="">Crypto</option>
                            <option value="">Stock</option>
                        </select>
                        <input placeholder="Search....." onChange={event => setSearch(event.target.value)}/>
                        <button type="submit">Search</button>
                    </SearchPageInput>
                    </ContentWrapper>
                    <AllComponentsWrapper>
                    <Title>Featured</Title>
                    <ShrinkingComponentWrapper>
                        <h1>This is search page search result</h1>
                    </ShrinkingComponentWrapper>
                    </AllComponentsWrapper>
                <FooterNav/>
        </>
    )
}

export default Search;