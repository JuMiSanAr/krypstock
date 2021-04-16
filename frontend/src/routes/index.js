import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from '../pages/home';
import LoginPage from '../pages/loginPage';
import PasswordReset from "../components/passwordReset/";
import PasswordVerification from "../components/passwordVerification/";
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
        <Route path="/sign-up/registration/" exact component={Registration}/>
        <Route path="/sign-up/congratulation/" exact component={Congratulation}/>
        <Route path="/sign-up/verification/" exact component={Verification} />
        <Route path="/password-reset/" exact component={PasswordReset} />
        <Route path="/password-verification/" exact component={PasswordVerification} />
        <Route path="/portfolio/:id" exact component={Portfolio} />
        <Route path="/add-remove/" exact component={AddRemovePage} />
        <Route path="/search/" exact component={Search} />
        <Route path="/news/" exact component={NewsPage} />
        <Route path="/stock/:symbol" exact component={StockPage} />
        <Route path="/crypto/:symbol" exact component={CryptoPage} />
        <Route path="/portfolio-list/" exact component={PortfolioList} />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
  );
}

export default OurRouter;