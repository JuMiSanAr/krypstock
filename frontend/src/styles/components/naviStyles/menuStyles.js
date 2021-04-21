import styled from "styled-components";
import {
    darkTheme,
    lightTheme
} from "../../Themes";


export const StyledMenu = styled.nav `
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme === lightTheme ? lightTheme.body : darkTheme.body};
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: ${({ open }) => open ? 'fixed ': 'absolute'};
  z-index: 20;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;


  @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 100%;
    }
 `;

/*export const MainWrapper = styled.div`
     .content {
            display: none;
        }
    .active-content {
        display:flex;
        flex-direction:column;
    }
`;*/
export const MenuWrapper = styled.div `
  /*  width: 70vw;
    height: 80vh;*/
  /*  border: 1px solid #f2f2eb;
    border-width:1px 1px 1px 0;*/
    /* padding: 0 20px 0  20px ; */
`;

export const MenuItemWrapper = styled.div `
    display:flex;
    justify-content: flex-start;
    align-items: center;
    padding: 5px;
    cursor: pointer;
    margin: 30px 0 30px 0;
    i{
        font-size:23px;
    }
 
    .move-right-1{
       margin: 0 105px 0 20px;
   }
   .move-right-2{
       margin: 0 90px 0 20px;
   }
   .move-right-3{
    margin: 0 135px 0 20px;
   }
   .move-right-4{
       margin: 0 145px 0 20px;
   } 
    .move-right-5{
       margin: 0 135px 0 20px;
   }
   .move-right-6{
       margin: 0 70px 0 20px;
   }
`;

export const LogoIconWrapper = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    img{
        height: 180px;
    }
`;

export const MenuContentWrapper = styled.div `
 color: ${({ theme }) => theme === lightTheme ? lightTheme.text  : darkTheme.text};
    img{
        height: 100px;
        width: 100px;
    }
`;

export const NaviWrapper = styled.div`
    display: flex;
    justify-content: center;
    .heading{
        margin-top: 10px;
        /* font-size: 16px; */
    }
    .portfolio i{
        font-size: 30px;
        color: orange;
    }
`;