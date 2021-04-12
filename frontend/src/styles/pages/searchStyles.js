import {lightTheme, darkTheme, allTheme} from '../Themes'
import styled from 'styled-components';

export const ContentWrapper = styled.div`
   img{
       width: 100%;
       height: 400px;
       margin-top:-200px;
   }
`;
export const SearchPageInput = styled.div`
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

export const Title = styled.h1`
    width: 100vw;
    display: flex;
    justify-content: center;
`;

export const TableWrapper = styled.div`
    /* display: flex;
    justify-content: center;
    align-items: center;*/
    /* padding: 0 30px 0 30px;  */
    overflow-x: auto;

    input{
        margin-left: 20px;
    }
`;

export const SearchWrapperTitle = styled.div`
    margin: 5px;
    div{
        margin: 10px;
    }
    .addToPortfolio{
        display: flex;
        justify-content: center;
        align-items: center;
        .addIcon{
            margin-left: 10px;
        }
    }
`;

export const TableContainerWrapper = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export  const Table = styled.table`
    width: 100%;
    /* background-color: ${({ theme }) => theme === lightTheme ? darkTheme.body : lightTheme.body}; */
    border-collapse: collapse;
    /* border-width: 2px; */
    /* border-style: solid; */
    color: ${({ theme }) => theme === lightTheme ?lightTheme.text : darkTheme.text};
    .headcol{
        position: sticky;
        left: 0;
        
        @media only screen and (max-width: 600px) and (min-width: 320px) {
        color: ${({ theme }) => theme === lightTheme ?lightTheme.text : lightTheme.text};
         /* background-color:#2B254A; */
        background-color: white;
        }
       
    }
    .tableHead{
        padding: 10px;
    }
    thead{
        background-color: ${props => props.id === 'crypto' ? allTheme.orange : props.id === "trans-history" ? allTheme.turquoise : allTheme.green};
        /* border-bottom: 1px solid #ffcc00; */
        color: ${({ theme }) => theme === lightTheme ? lightTheme.text : darkTheme.text};
      
        tr{
            height: 60px;
           
        }
    }

    tbody tr{
        height: 50px;
        :nth-child(2n) {
            background: ${({ theme }) => theme === lightTheme ? darkTheme.secondBackground : lightTheme.secondBackground};;
        }
    }

    tbody td{
        text-align: center;
        padding: 3px;
    }

    /* tr:first-child th:first-child {
        border-top-left-radius: 15px;
    }

    tr:first-child th:last-child {
        border-top-right-radius: 15px;
    }

    tr:last-child td:first-child {
    border-bottom-left-radius: 15px;
    }

    tr:last-child td:last-child {
    border-bottom-right-radius: 15px;
    } */
`;