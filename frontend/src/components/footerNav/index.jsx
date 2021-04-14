import React from 'react';
import {Link} from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import SearchIcon from '@material-ui/icons/Search';
// import AnnouncementIcon from '@material-ui/icons/Announcement';
import { FooterWrapper } from '../../styles/components/footerNavStyles';
import {BiNews} from 'react-icons/bi';

const FooterNav = ({setOpen}) => {
            const handleMenuState = () => {
                setOpen(false)
            }

    return (
        <FooterWrapper>
            <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>
                <HomeIcon onClick={handleMenuState}/>
            </Link>
            <Link to="/portfolio-list/" style={{textDecoration: 'none', color: 'inherit'}}>
                <TrendingUpIcon onClick={handleMenuState}/>
            </Link>
            <Link to="/add-remove/" style={{textDecoration: 'none', color: 'inherit'}}>
                <AddCircleIcon onClick={handleMenuState}/>
            </Link>
            <Link to="/search/" style={{textDecoration: 'none', color: 'inherit'}}>
                <SearchIcon onClick={handleMenuState}/>
            </Link>
            <Link to="/news/" style={{textDecoration: 'none', color: 'inherit'}}>
                <BiNews size={24} onClick={handleMenuState}/>
            </Link>
        </FooterWrapper>
    )
}

export default FooterNav
