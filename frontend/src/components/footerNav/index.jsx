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

    const [currentPage, setCurrentPage] = useState('');

    const handleMenuState = () => {
        setCurrentPage(window.location.pathname);
        // setOpen(false);
        console.log(currentPage)
    }
    
    useEffect( () => {
        console.log('updating')
    }, [currentPage])


    return (
        <FooterWrapper currentPage={currentPage}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                {/* <HomeIcon className="iconfocus" onClick={handleMenuState} /> */}
                <i onClick={() => setCurrentPage('/')} className="fa fa-home home" aria-hidden="true"></i>
            </Link>
            <Link to="/portfolio-list/" style={{ textDecoration: 'none', color: 'inherit' }}>
                {/* <TrendingUpIcon onClick={handleMenuState} /> */}
                <i onClick={() => setCurrentPage('/portfolio-list/')} className="fa fa-folder-open portfolio" aria-hidden="true"></i>
            </Link>
            <Link to="/add-remove/" style={{ textDecoration: 'none', color: 'inherit' }}>
                {/* <AddCircleIcon onClick={handleMenuState} /> */}
                <i onClick={() => setCurrentPage('/add-remove/')} className="fas fa-wallet add-remove"></i>
            </Link>
            <Link to="/search/" style={{ textDecoration: 'none', color: 'inherit' }}>
                {/* <SearchIcon onClick={handleMenuState} /> */}
                <i onClick={() => setCurrentPage('/search/')} className="fa fa-search search" aria-hidden="true"></i>
            </Link>
            <Link to="/news/" style={{ textDecoration: 'none', color: 'inherit' }}>
                {/* <BiNews size={24} onClick={handleMenuState} /> */}
                <i onClick={() => setCurrentPage('/news/')} className="fas fa-globe news"></i>
            </Link>
        </FooterWrapper>
    )
}

export default FooterNav
