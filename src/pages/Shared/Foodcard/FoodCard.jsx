
const FoodCard = ({item}) => {
const {name, image, price, recipe} = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl w-72">
            <figure>
                <img src={image} />
            </figure>
            <p className="absolute right-0 mr-4 mt-4 px-4 bg-base-content text-white">${price} </p>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button className="btn btn-warning">Add now</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;