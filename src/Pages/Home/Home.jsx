import Offer from "../../Components/Offer";
import Footer from "../../Share/Footer";
import Banner from "./Banner";
import Services from "./Services";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Offer></Offer>
          
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;