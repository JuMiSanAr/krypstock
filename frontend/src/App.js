import {UseDarkMode} from "./components/darkLightmode/useDarkMode";
import {darkTheme, lightTheme} from "./styles/Themes";
import styled, {ThemeProvider} from "styled-components";
import {GlobalStyles} from "./styles/GlobalStyles";
import Toggle from "./components/darkLightmode/toggler";
import OurRouter from './routes';
import React, { useState} from "react";
import Burger from "./components/navi/burger";
import Menu from "./components/navi/menu";
import history from "./history";
import { Router } from 'react-router';
import FooterNav from "./components/footerNav";
import {useSelector} from "react-redux";
import { PageWrapper } from "./styles/globalParts/containerStyles";

const MenuWrapper = styled.div`
  margin-bottom: 80px;
`;
const ToggleButton = styled.div`
    z-index: 999;
    width: 100vw;
    display:flex;
    flex-wrap: wrap;
    justify-content: flex-end;
`;


function App() {

  const userLoggedMenu = useSelector(state => state.logInReducer.authenticated);

  const [theme, themeToggler, mountedComponent] = UseDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  const [open, setOpen] = useState(false);

  if(!mountedComponent) return <div/>


  return (
    <ThemeProvider setOpen={setOpen} theme={themeMode}>
        <>
          <GlobalStyles/>
           <ToggleButton>
          <Toggle theme={theme} toggleTheme={themeToggler} />
           </ToggleButton>
            <Router history={history}>
              {
               userLoggedMenu ? 
               <MenuWrapper>
                <Burger  open={open} setOpen={setOpen}/>
                <Menu  open={open} setOpen={setOpen} />
                </MenuWrapper> : ""
              }
              {userLoggedMenu ? 
              <PageWrapper>
                <OurRouter />
              </PageWrapper> 
              :
              <OurRouter />
              }
                
              {
                userLoggedMenu ? <FooterNav setOpen={setOpen}/>
                : ""
              }
            </Router>
        </>
    </ThemeProvider>
  );
}

export default App;

