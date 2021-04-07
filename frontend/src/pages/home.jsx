// import Button from '../styles/components/buttonStyles';
import {Crypto }from '../components/homeComponents/crypto/index'
import FooterNav from '../components/footerNav';
import Stock from '../components/homeComponents/stock/index.jsx';

const Home = () => {

    return (
        <>
            {/* <Button/> */}
            <Stock/>
            <Crypto/>
            <FooterNav/>

        </>
    )
}

export default Home;