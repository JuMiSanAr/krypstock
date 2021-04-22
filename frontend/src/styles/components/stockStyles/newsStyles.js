import styled from "styled-components";
import {
    lightTheme,
    darkTheme
} from "../../Themes";

export const FlexDiv = styled.div `
    display: flex;
`
export const WrapperBorder = styled.div`
    border: solid 1px red;
    * {
        border: solid 1px red;
    }
`

export const NewsWrapper = styled(FlexDiv)`
    flex-direction: column;
    justify-content: space-between;
     
    a {
        text-decoration: none;
        color: ${({ theme }) => theme === lightTheme ? lightTheme.text : darkTheme.text};
        :hover {
            cursor: pointer;
        }
    }

    .source {
        font-size: 0.8rem;
        margin-bottom: 1em;
    }    
    
    .news_date {
        font-size: 10px;
        margin-top: 0px;
        margin-bottom: 10px;
    }
    
    h3 {
        margin-bottom: 0px;
    }
`

export const HeadlineWrapper = styled.article `
    margin: 10px;
  width: 400px;
    
    span{     
        padding: 10px;
    }
    img{
        width: 300px;
        height: 250px;
        cursor: pointer;
        border-radius: 5px;
        padding-right: 20px;
    }
    .publishDetial{
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
    }
    h3{
        cursor: pointer;
        font-size: 16px;
    }

    @media only screen and (max-width: 600px) and (min-width: 320px) {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: 10px;
      width: 350px;
        
        img{
        height: 100px;
        width: 100px;
        margin-right: 10px;
    }
    .publishDetial{
        display: flex;
        flex-direction: column;
    }
    .summary{
        display: none;
    }
    }

`;

export const DateAuthorWrapper = styled.div `
    margin-bottom: 8px;
    span{
    font-size: 10px;
    margin-right: 10px;
    }
`;

export const ShowMore = styled.div `
    display: flex;
    justify-content: center;
`;

// export const HeroHeader = styled.header `
//   height: 400px;
//   width: 100vw;
//   margin-top: -200px;
//   background-image: url("https://source.unsplash.com/WYd_PkCa1BY");
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;
//   display: flex;
//   justify-content: flex-end;
//   align-items: center;


// `;

export const NewsContentWrapper = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: auto;

    @media only screen and (max-width: 600px) and (min-width: 320px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        overflow: auto;
        word-break: break-word;
        margin: 0;
        /* width: 100%; */
    }
`;

export const HeaderTitle = styled.div `
    h1{
        margin-left: 30px;
    }
    .toggleTitle{
        display: flex;
        align-items: center;
        margin-right: auto;
        span{
            margin: 0 20px 0 20px;
        }
        h3{
            cursor: pointer;
            :hover{
                color: yellow;
            }
        }
    }
    @media only screen and (max-width: 600px) and (min-width: 320px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 0;
        //width: 100vw;
    }
`;


// crypto News Styles home page

export const CryptoNewsWrapper = styled(FlexDiv)
`
    flex-direction: column;
    justify-content: space-between;  
    
    .news_date {
        font-size: 10px;
        margin-top: 0px;
        margin-bottom: 10px;
    }
    
    h3 {
        margin-bottom: 0px;
    }
`

export const CryptoHeadlineWrapper = styled.article `
    
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: 10px;
        img{
        height: 100px;
        width: 100px;
        margin-right: 10px;
    }
    .publishDetial{
        display: flex;
        flex-direction: column;
    }
    .summary{
        display: none;
    }
    span{
     
        padding: 10px;
    }
    h3{
        cursor: pointer;
        margin-bottom: 10px;
    }

`;