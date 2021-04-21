import React,  {useEffect}  from 'react';
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
// import FolderIcon from "@material-ui/icons/Folder";
// import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";
import { loginUserDataFetch } from '../../store/fetches/loginUserDataFetches';
import { loginUserAction } from '../../store/actions/loginUserAction';
import {useDispatch} from 'react-redux';
import {loginAction} from "../../store/actions/loginActions";

// import {BiNews} from 'react-icons/bi';
// import {FaSearchDollar} from 'react-icons/fa';
import {currentPageAction} from "../../store/actions/currentPageActions";

const Menu = ({open, setOpen}) => {
    
    const dispatch = useDispatch();
    const userData = useSelector(state => state.logInUserReducer.user_data.data);

    const history = useHistory();

    const isHidden = !!open;
/*  const tabIndex = isHidden ? 0 : -1;*/

    const toDashboard = () => {
        setOpen(false)
        history.push('/');
        const action = currentPageAction('/');
        dispatch(action);
    }
    const toPortfolios = () => {
        setOpen(false)
        history.push('/portfolio-list');
        const action = currentPageAction('/portfolio-list/');
        dispatch(action);
    }
    const toTransaction = () => {
        setOpen(false)
        history.push('/new-transaction');
        const action = currentPageAction('/new-transaction/');
        dispatch(action);
    }
    const toSearch = () => {
        setOpen(false)
        history.push('/search');
        const action = currentPageAction('/search/');
        dispatch(action);
    }
    const toNews = () => {
        setOpen(false)
        history.push('/news');
        const action = currentPageAction('/news/');
        dispatch(action);
    }
    const logout = () => {
        setOpen(false)
        localStorage.removeItem('token');
        const actions=loginAction(null,false)
        dispatch(actions)
        history.push('/sign-in');
    }
    

    useEffect(() => {
        loginUserDataFetch()
        .then(data => {
            dispatch(loginUserAction(data))
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  return (
    <StyledMenu open={open} aria-hidden={!isHidden}>
         <MenuWrapper>
            <LogoIconWrapper>
                <img src={Logo} alt="logo"/>
            </LogoIconWrapper>
            <MenuContentWrapper>
                <h2>Welcome, {userData ? userData.username : ""}</h2>
                <MenuItemWrapper>
                <DashboardIcon/>
                <span className="move-right-1" onClick={() => toDashboard()}>Dashboard</span>
                <ArrowForwardIosIcon/>
                </MenuItemWrapper>
                <MenuItemWrapper>
                <i className="fa fa-folder-open" aria-hidden="true"></i>
                <span className="move-right-2" onClick={() => toPortfolios()}>My portfolios</span>
                <ArrowForwardIosIcon/>
                </MenuItemWrapper>
                <MenuItemWrapper>
                <i className="fas fa-wallet new-transaction" aria-hidden="true"></i>
                <span className="move-right-6" onClick={() => toTransaction()}>New transaction</span>
                <ArrowForwardIosIcon/>
                </MenuItemWrapper>
                {/* <MenuItemWrapper>
                <SettingsIcon/>
                <span className="move-right-3">Settings</span>
                <ArrowForwardIosIcon/>
                </MenuItemWrapper> */}
                <MenuItemWrapper>
                <i className="fa fa-search" aria-hidden="true"></i>
                <span className="move-right-3"  onClick={() => toSearch()}>Search</span>
                <ArrowForwardIosIcon/>
                </MenuItemWrapper>
                <MenuItemWrapper>
                <i className="fas fa-globe"></i>
                <span className="move-right-4"  onClick={() => toNews()}>News</span>
                <ArrowForwardIosIcon/>
                </MenuItemWrapper>
                <MenuItemWrapper>
                <ExitToAppIcon/>
                <span className="move-right-5" onClick={() => logout()}>Logout</span>
                <ArrowForwardIosIcon/>
                </MenuItemWrapper>
            </MenuContentWrapper>
        </MenuWrapper>
    </StyledMenu>
  )
}

export default Menu;
