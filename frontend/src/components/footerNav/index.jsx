import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
// import HomeIcon from '@material-ui/icons/Home';
// import TrendingUpIcon from '@material-ui/icons/TrendingUp';
// import AddCircleIcon from '@material-ui/icons/AddCircle';
// import SearchIcon from '@material-ui/icons/Search';
// import AnnouncementIcon from '@material-ui/icons/Announcement';
import { FooterWrapper } from '../../styles/components/footerNavStyles';
import {currentPageAction} from "../../store/actions/currentPageActions";
import {useDispatch, useSelector} from "react-redux";
// import { BiNews } from 'react-icons/bi';

const FooterNav = () => {

    const currentPage = useSelector(state => state.currentPageReducer.currentPage);

    const dispatch = useDispatch();

    const handleMenuState = (path) => {
        const action = currentPageAction(path);
        dispatch(action);
    }
    
    // useEffect( () => {
    //     console.log('updating')
    // }, [currentPage])


    return (
        <FooterWrapper currentPage={currentPage}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                {/* <HomeIcon className="iconfocus" onClick={handleMenuState} /> */}
                <i onClick={() => handleMenuState('/')} className="fa fa-home home" aria-hidden="true"> </i>
            </Link>
            <Link to="/portfolio-list/" style={{ textDecoration: 'none', color: 'inherit' }}>
                {/* <TrendingUpIcon onClick={handleMenuState} /> */}
                <i onClick={() => handleMenuState('/portfolio-list/')} className="fa fa-folder-open portfolio" aria-hidden="true"> </i>
            </Link>
            <Link to="/new-transaction/" style={{ textDecoration: 'none', color: 'inherit' }}>
                {/* <AddCircleIcon onClick={handleMenuState} /> */}
                <i onClick={() => handleMenuState('/new-transaction/')} className="fas fa-wallet new-transaction"> </i>
            </Link>
            <Link to="/search/" style={{ textDecoration: 'none', color: 'inherit' }}>
                {/* <SearchIcon onClick={handleMenuState} /> */}
                <i onClick={() => handleMenuState('/search/')} className="fa fa-search search" aria-hidden="true"> </i>
            </Link>
            <Link to="/news/" style={{ textDecoration: 'none', color: 'inherit' }}>
                {/* <BiNews size={24} onClick={handleMenuState} /> */}
                <i onClick={() => handleMenuState('/news/')} className="fas fa-globe news"> </i>
            </Link>
        </FooterWrapper>
    )
}

export default FooterNav
