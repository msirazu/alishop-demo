import { useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {
    const allData = useLoaderData();
    const { Id } = useParams();
    const convertedId = Number(Id);
    const product = allData.find(p => p.id === convertedId)
    const { title, price, discountPrice, imageUrl, id, sku } = product; 
    return (
        <div className="flex flex-col md:flex-row justify-center gap-5 m-5 md:mx-0">
            <div className="md:w-[50%] border border-gray-200 p-5 flex justify-center items-center">
                <img src={imageUrl}/>
            </div>
            <div className="md:w-[50%] border border-gray-200 p-5">
                <h1 className="font-bold text-3xl">{title}</h1>
                <div className="flex justify-between">
                    <p>{`${price} ${discountPrice}`}</p>
                    <p>{sku}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;