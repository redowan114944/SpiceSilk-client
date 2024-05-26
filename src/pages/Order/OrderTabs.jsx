import FoodCard from "../Shared/Foodcard/FoodCard";

const OrderTabs = ({items}) => {
    return (
        <div className='grid md:grid-cols-3 gap-5 justify-center'>
                    {
                    items.map(item => <FoodCard
                    key={item._id}
                    item={item}
                    ></FoodCard>)
                    }
                    </div>
    );
};

export default OrderTabs;