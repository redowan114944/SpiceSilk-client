import { Helmet } from "react-helmet-async";
import Cover from "./Shared/Cover/Cover";
import menuImg from '../assets/menu/banner3.jpg'
import dessertImg from '../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../assets/menu/pizza-bg.jpg'
import saladImg from '../assets/menu/salad-bg.jpg'
import soupImg from '../assets/menu/soup-bg.jpg'
import useMenu from "../hooks/useMenu";
import SectionTitle from "../components/SectionTitle";
import MenuCategory from "./Shared/MenuItem/MenuCategory";


const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered');
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    return (
        <div>
            <Helmet>
                <title>SpiceSilk | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="Our Menu" subTitle="Would you like to try a dish?"></Cover>
            <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
            {/* offer menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu items */}
            <MenuCategory items={dessert}
            title="Dessert"
            img={dessertImg}
            ></MenuCategory>
            {/* pizza  menu */}
            <MenuCategory items={pizza} title={"Pizza"} img={pizzaImg}></MenuCategory>
            <MenuCategory items={salad} title={"Salad"} img={saladImg}></MenuCategory>
            <MenuCategory items={soup} title={"Soup"} img={soupImg}></MenuCategory>
        </div>
    );
};

export default Menu;