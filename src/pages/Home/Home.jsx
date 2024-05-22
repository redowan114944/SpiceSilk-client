
import Newsletter from "../../components/Newsletter";
import Banner from "./Banner";
import Category from "./Category/Category";
import PopularMenu from "./Category/PopularMenu";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Newsletter></Newsletter>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;