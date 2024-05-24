import Cover from "../Cover/Cover";
import MenuItem from "./MenuItem";

const MenuCategory = ({items, title, subTitle, img}) => {
    return (
        <div className="pt-8">
            {title && <Cover img={img} title={title} subTitle="Would you like to try a dish?"></Cover>}
            <div className="grid md:grid-cols-2 gap-10 my-16">
                    {
                        items.map(item=> <MenuItem
                            key={item.id}
                            item={item}
                        ></MenuItem>)
                    }
                </div>
        </div>
    );
};

export default MenuCategory;