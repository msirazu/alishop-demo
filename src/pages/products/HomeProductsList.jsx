const HomeProductsList = ({ product }) => {
    const { title, price, discountPrice, imageUrl } = product; 
    return (
        <div className="border border-gray-300 p-2">
            <img className="" src={imageUrl}/>
            <h2 className="text-lg font-bold">{title}</h2>
            <div className="flex justify-between my-5">
                <p className="text-secondary text-2xl font-bold">{discountPrice}</p>
                <p className="text-xl line-through">{price}</p>
            </div>
        </div>
    );
};

export default HomeProductsList;