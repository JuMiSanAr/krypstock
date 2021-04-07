import React from 'react';
import DashboardIcon from "@material-ui/icons/Dashboard";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import {
    LogoIconWrapper,
   StyledMenu,
    MenuContentWrapper,
    MenuItemWrapper,
    MenuWrapper
} from "../../styles/components/naviStyles/menuStyles";
import Logo from "../../assets/logo/logo_with_name.png";
import MenuIcon from "@material-ui/icons/Menu";
import FolderIcon from "@material-ui/icons/Folder";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";


const Menu = ({open}) => {
  
  const isHidden = open ? true : false;
/*  const tabIndex = isHidden ? 0 : -1;*/

  return (
    <StyledMenu open={open} aria-hidden={!isHidden}>
         <MenuWrapper>
            <LogoIconWrapper>
                <img src={Logo} alt="logo"/>
                <MenuIcon/>
            </LogoIconWrapper>
            <MenuContentWrapper>
                <h2>Hello, Cindy</h2>
                <MenuItemWrapper>
                <DashboardIcon/>
                <span className="move-right-1">Dashboard</span>
                <ArrowForwardIosIcon/>
                </MenuItemWrapper>
                <MenuItemWrapper>
                <FolderIcon/>
                <span className="move-right-2">Portfolio</span>
                <ArrowForwardIosIcon/>
                </MenuItemWrapper>
                <MenuItemWrapper>
                <SettingsIcon/>
                <span className="move-right-2">Settings</span>
                <ArrowForwardIosIcon/>
                </MenuItemWrapper>
                <MenuItemWrapper>
                <ExitToAppIcon/>
                <span className="move-right-3">Logout</span>
                <ArrowForwardIosIcon/>
                </MenuItemWrapper>
            </MenuContentWrapper>
        </MenuWrapper>
    </StyledMenu>
  )
}

export default Menu;
