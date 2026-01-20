import { Link } from "react-router-dom";

const HomeProductsList = ({ product }) => {
    const { title, price, discountPrice, imageUrl, id } = product; 
    return (
        <Link to={`/product-details/${id}`}>
        <div className="border border-gray-300 p-2 hover:border hover:border-secondary hover:cursor-pointer h-100">
            <img className="" src={imageUrl}/>
            <h2 className="text-lg font-bold">{title}</h2>
            <div className="flex justify-between my-5">
                <p className="text-secondary text-2xl font-bold">{discountPrice}</p>
                <p className="text-xl line-through">{price}</p>
            </div>
        </div>
        </Link>
    );
};

export default HomeProductsList;