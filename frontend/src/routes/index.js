import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from '../pages/home';
import LoginPage from '../pages/loginPage';
import SignUp from "../components/signUp/";
import Congratulation from "../components/congratulation/";
import Registration from "../components/registration/";
import Verification from "../components/verification";
import Portfolio from "../pages/portfolio";
import AddRemovePage from "../pages/addRemove";
import Search from "../pages/search";
import NewsPage from "../pages/newsPage";
import StockPage from "../pages/stockPage";
import CryptoPage from "../pages/cryptoPage";
import CryptosPage from "../components/charts/candlesticksCryptoHistorical.jsx";
import PortfolioList from "../pages/portfolioList";


function OurRouter() {
  return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/sign-in/" exact component={LoginPage} />
        <Route path="/sign-up/" exact component={SignUp} />
        <Route path="/sign-up/registration" exact component={Registration}/>
        <Route path="/sign-up/congratulation" exact component={Congratulation}/>
        <Route path="/sign-up/verification" exact component={Verification} />
        <Route path="/portfolio/:id" exact component={Portfolio} />
        <Route path="/add-remove/" exact component={AddRemovePage} />
        <Route path="/search/" exact component={Search} />
        <Route path="/news/" exact component={NewsPage} />
        <Route path="/stock/" exact component={StockPage} />
        <Route path="/crypto/" exact component={CryptoPage} />
        <Route path="/cryptos/" exact component={CryptosPage} />
        <Route path="/portfolio-list/" exact component={PortfolioList} />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
  );
}

export default OurRouter;