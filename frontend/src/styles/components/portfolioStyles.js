import styled from 'styled-components';
import {allTheme} from '../../styles/Themes';

export const InvestmentsContainer = styled.div`
display: flex;
justify-content: space-between;
`;

export const OverviewBarGreen = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
background-color: ${allTheme.vibrantturquoise};
border-radius: 14px;
margin: 10px 0;
i{
    font-size: 24px;
}
`;

export const OverviewBarBlue = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
background-color: ${allTheme.darkblue};
border-radius: 14px;
margin: 10px 0;
i{
    font-size: 24px;
}
`;

export const OverviewBarOrange = styled.div`
display: flex;
justify-content: space-around;
background-color: ${allTheme.vibrantorange};
border-radius: 14px;
margin: 10px 0;
`;

export const OverviewBarYellow = styled.div`
display: flex;
justify-content: space-around;
background-color: ${allTheme.yellow};
border-radius: 14px;
margin: 10px 0;
`;

export const HeadlineFont = styled.p`
font-weight: 600;
`;

export const CakeChartContainer = styled.div`
width: 100%;
`;
