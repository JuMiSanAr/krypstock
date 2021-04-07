import FooterNav from '../components/footerNav'
import {HumburgerNavi} from "../components/hamburgerNavi";
import MarketOverview from '../components/homeComponents/marketOverview';

const Home = () => {

    return (
        <>
            <HumburgerNavi/>
            <h1>Home</h1>
            <MarketOverview/>
            <FooterNav/>
        </>
    )
}

export default Home;