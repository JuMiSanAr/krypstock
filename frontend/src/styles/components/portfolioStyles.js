import styled from 'styled-components';
import {allTheme} from '../../styles/Themes';

export const PortfolioHeadline = styled.h1`
font-size: 22px;
padding-left: 20px;
`;

export const InvestmentsContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
i{
    color: green;
    padding: 10px;
}
`;

export const InvestmentFont = styled.p`
font-weight: 600;
font-size: 16px;

i{
    padding: 0;
    padding-right: 5px;
}
`;

export const OverviewDescriptionContainer = styled.div`
display: flex;
justify-content: space-between;
`;

export const OverviewDescription = styled.p`
font-size: 14px;

`;

export const OverviewBar = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
background-color: ${allTheme.vibrantturquoise};
border-radius: 14px;
margin: 10px 0;
i{
    font-size: 14px;
    color: red;
}
.fa-btc {
    color: white;
    font-size: 22px;
}

.fa-briefcase{
    color: white;
    font-size: 20px;
}
> * {
    width: 25%;
}
`;

export const HeadlineFont = styled.p`
font-weight: 600;
font-size: 12px;
margin-bottom: 0;
//padding-bottom: 10px;
`;

export const Headline = styled.p`
font-weight: 600;
font-size: 16px;
padding-bottom: 10px;
`;

export const CakeChartContainer = styled.div`
width: 100%;
`;

export const TempDiv = styled.div`
padding-top: 5px;
p {
    margin: 0;
    padding: 0 5px 5px 5px;
}
`;

export const Desc = styled.p`
font-size: 10px;
`;

export const NetworthContainer = styled.div`
padding-top: 7px;
padding-bottom: 7px;
`;

export const IconConatiner = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 5px;
`;

export const LegendContainer = styled.div`
display: flex;
align-items: center;
padding: 0 10px;
`;

export const ColorSquare = styled.div`
width: 10px;
height: 10px;
margin: 10px;
`;

export const LegendWrapper = styled.div`
display: flex;
flex-wrap: wrap;
`;