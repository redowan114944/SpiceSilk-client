
import { Helmet } from "react-helmet-async";
import Featured from "../../components/Featured/Featured";
import Newsletter from "../../components/Newsletter";
import Phone from "../../components/Phone";
import Banner from "./Banner";
import Category from "./Category/Category";
import PopularMenu from "./Category/PopularMenu";
import Testimonials from "./Testimonials";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>SpiceSilk | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <Newsletter></Newsletter>
            <PopularMenu></PopularMenu>
            <Phone></Phone>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;