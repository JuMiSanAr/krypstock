/*
import React from 'react';
import Logo from '../../assets/logo/logo_with_name.png';
import MenuIcon from '@material-ui/icons/Menu';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FolderIcon from '@material-ui/icons/Folder';
import SettingsIcon from '@material-ui/icons/Settings';
import { useState } from "react";
import {
    LogoIconWrapper,
    MainWrapper,
    MenuContentWrapper,
    MenuItemWrapper,
    MenuWrapper
} from "../../styles/components/naviStyles";



export const HumburgerNavi = () => {
    const [toggleState, setToggleState] = useState(1);
   
    const toggleTab = (index) => {
        setToggleState(index);
      };

    return (
        <>
        
        <MainWrapper>
        <MenuIcon className={toggleState === 1 ? " active-content" : "content"} onClick={() => toggleTab(2)}/>
        <MenuWrapper className={toggleState === 2 ? " active-content" : "content"}>
            <LogoIconWrapper>
                <img src={Logo} alt="logo"/>
                <MenuIcon  onClick={() => toggleTab(1)}/>
            </LogoIconWrapper>
            <MenuContentWrapper>
                <img src='https://res.cloudinary.com/tennam/image/upload/v1613260389/Propulsion/Tenzin.png' alt="logo"/>
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
        </MainWrapper>
        </>
    )
}
*/