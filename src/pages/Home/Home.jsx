import Newsletter from "../../components/Nwesletter";
import Banner from "./Banner";
import Category from "./Category/Category";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;