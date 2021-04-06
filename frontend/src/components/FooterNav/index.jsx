import React from 'react';
import {Link} from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import SearchIcon from '@material-ui/icons/Search';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import { FooterWrapper } from '../../styles/components/footerNavStyles';


const FooterNav = () => {

    return (
        <FooterWrapper>
            <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>
                <HomeIcon />
            </Link>
            <Link to="/portfolio/" style={{textDecoration: 'none', color: 'inherit'}}>
                <TrendingUpIcon />
            </Link>
            <Link to="/add-remove/" style={{textDecoration: 'none', color: 'inherit'}}>
                <AddCircleIcon />
            </Link>
            <Link to="/search/" style={{textDecoration: 'none', color: 'inherit'}}>
                <SearchIcon />
            </Link>
            <Link to="/news/" style={{textDecoration: 'none', color: 'inherit'}}>
                <AnnouncementIcon />
            </Link>
        </FooterWrapper>
    )
}

export default FooterNav