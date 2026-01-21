import { Link } from "react-router-dom";

const HomeProductsList = ({ product }) => {
    const { title, price, discountPrice, imageUrl, id } = product; 
    return (
        <Link to={`/product-details/${id}`}>
        <div className="border border-gray-300 hover:border hover:border-secondary hover:cursor-pointer h-90 hover:shadow-2xl transition duration-500 ease-in-out">
            <img className="hover:bg-gray-200 transition duration-500 ease-in-out" src={imageUrl}/>
            <div className="p-2">
            <h2 className="text-md font-bold">{title}</h2>
            <div className="flex justify-between my-5">
                <p className="text-secondary text-2xl font-bold">৳{discountPrice}</p>
                <p className="text-xl line-through">৳{price}</p>
            </div>
            </div>
        </div>
        </Link>
    );
};

export default HomeProductsList;