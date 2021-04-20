import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
// import HomeIcon from '@material-ui/icons/Home';
// import TrendingUpIcon from '@material-ui/icons/TrendingUp';
// import AddCircleIcon from '@material-ui/icons/AddCircle';
// import SearchIcon from '@material-ui/icons/Search';
// import AnnouncementIcon from '@material-ui/icons/Announcement';
import { FooterWrapper } from '../../styles/components/footerNavStyles';
// import { BiNews } from 'react-icons/bi';

const FooterNav = ({ setOpen }) => {

    const [currentPage, setCurrentPage] = useState('home');

    const handleMenuState = () => {
        setOpen(false);

        // let currentPath = window.location.pathname;
        // setCurrentPage(currentPath);
    }

    // useEffect( () => {
    //     console.log(currentPage)
    // }, [currentPage])

    return (
        <FooterWrapper>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                {/* <HomeIcon className="iconfocus" onClick={handleMenuState} /> */}
                <i onClick={() => {handleMenuState(); setCurrentPage(window.location.pathname); console.log(currentPage);}} className="fa fa-home home" aria-hidden="true" currentPage={currentPage}></i>
            </Link>
            <Link to="/portfolio-list/" style={{ textDecoration: 'none', color: 'inherit' }}>
                {/* <TrendingUpIcon onClick={handleMenuState} /> */}
                <i onClick={() => {handleMenuState(); setCurrentPage(window.location.pathname); console.log(currentPage);}} className="fa fa-folder-open portfolio" aria-hidden="true" currentPage={currentPage}></i>
            </Link>
            <Link to="/add-remove/" style={{ textDecoration: 'none', color: 'inherit' }}>
                {/* <AddCircleIcon onClick={handleMenuState} /> */}
                <i onClick={() => {handleMenuState(); setCurrentPage(window.location.pathname); console.log(currentPage);}} className="fas fa-wallet add-remove" currentPage={currentPage}></i>
            </Link>
            <Link to="/search/" style={{ textDecoration: 'none', color: 'inherit' }}>
                {/* <SearchIcon onClick={handleMenuState} /> */}
                <i onClick={() => {handleMenuState(); setCurrentPage(window.location.pathname); console.log(currentPage);}} className="fa fa-search search" aria-hidden="true" currentPage={currentPage}></i>
            </Link>
            <Link to="/news/" style={{ textDecoration: 'none', color: 'inherit' }}>
                {/* <BiNews size={24} onClick={handleMenuState} /> */}
                <i onClick={() => {handleMenuState(); setCurrentPage(window.location.pathname); console.log(currentPage);}} className="fas fa-globe news" currentPage={currentPage}></i>
            </Link>
        </FooterWrapper>
    )
}

export default FooterNav

// 
// setCurrentPage('home');
// setCurrentPage('portfolio');
// setCurrentPage('add-remove');
// setCurrentPage('search');
// setCurrentPage('news');