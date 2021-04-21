import {lightTheme, darkTheme, allTheme, fontSize} from '../Themes'
import styled from 'styled-components';


export const SearchPageInput = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
 
    
    select{
       
        height: 45px;
        width: 56%;
        /* margin-right: 5px; */
        border: #d7d5de 2px solid;
        border-radius: 10px;
        //border-bottom-left-radius: 20px;
        font-size:16px;
        padding: 5px 10px 5px 10px;
        margin: 5px;
        cursor: pointer;
        color: #d7d5de;//${({ theme }) => theme === lightTheme ? darkTheme.text  : lightTheme.text};
        background-color: #2C254A;//${({ theme }) => theme === lightTheme ? darkTheme.background  : lightTheme.background };
        /* appearance: none;
        ::-ms-expand{
          display: none;  
        } */
        :focus{
            outline: none;
        }

        #option-all{
        border: solid 1px yellow;
        background-color: yellow;
        }
    }

    input{
        height: 43px;
        width: 84%;
        margin-right: 5px;
        border:none;
        border-radius: 10px;
        //text-align: center;
        font-size:16px;
        margin: 5px;
        padding-left: 10px;
        color: #868295; //${({ theme }) => theme === lightTheme ? darkTheme.text  : lightTheme.text};
        background-color: #1F193A;//${({ theme }) => theme === lightTheme ? darkTheme.inputBackground  : lightTheme.inputBackground };
        :focus{
            outline: none;
        }
        ::placeholder {
            padding-left: 10px; 
            color: #868295;//${({ theme }) => theme === lightTheme ? darkTheme.text  : lightTheme.text};
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

// export const Title = styled.h1`
//     width: 100vw;
//     display: flex;
//     justify-content: center;
// `;

export const TableWrapper = styled.div`
    /* padding: 0 30px 0 30px;  */
    overflow-x: auto;
    margin-bottom: 30px;

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
   flex-direction: column;
`;

export  const Table = styled.table`
    width: 100%;
    /* background-color: ${({ theme }) => theme === lightTheme ? darkTheme.body : lightTheme.body}; */
    border-collapse: collapse;
    /* border-width: 2px; */
    /* border-style: solid; */
    /* table-layout: fixed; */
    color: ${({ theme }) => theme === lightTheme ?lightTheme.text : darkTheme.text};
    
    } */
    .tableHead{
        padding: 10px;
    }
    thead{
        background: ${props => props.id === 'crypto' ? allTheme.yellowGradient : props.id === "trans-history" ? allTheme.blueGradient : allTheme.turquoiseGradient};
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
        font-size: ${fontSize.fontSizeS};
    }

    .tdDiv {
        width: 50%;
        text-align: left;
        display: inline-block;
        white-space: nowrap;
    }

    .tdDivVolume {
        width: 45%;
        text-align: right;
        display: inline-block;
        white-space: nowrap;
    }

    .tdDivWide {
        width: 65%;
        text-align: right;
        display: inline-block;
        white-space: nowrap;
    }

    .tdDivPrice {
        width: 80%;
        text-align: right;
        display: inline-block;
        white-space: nowrap;
    }

    tr:first-child th:first-child {
        border-top-left-radius: 6px;
    }

    tr:first-child th:last-child {
        border-top-right-radius: 6px;
    }

    tr:last-child td:first-child {
    border-bottom-left-radius: 6px;
    }

    tr:last-child td:last-child {
    border-bottom-right-radius: 6px;
    }
`;