import { useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {
    const allData = useLoaderData();
    const { Id } = useParams();
    const convertedId = Number(Id);
    const product = allData.find(p => p.id === convertedId)
    const { title, price, discountPrice, imageUrl, sku, color } = product; 
    return (
        <div className="flex flex-col md:flex-row justify-center gap-5 m-5 font-poppins">
            <div className="md:w-[50%] border border-gray-200 p-5 flex justify-center items-center">
                <img src={imageUrl}/>
            </div>
            <div className="md:w-[50%] border border-gray-200 p-5">
                <h1 className="font-bold text-3xl">{title}</h1>
                <div className="flex justify-between my-5 items-center">
                    <div className="flex gap-3 items-center">
                        <p className="text-2xl line-through">৳{price}</p>
                        <p className="text-third font-bold text-3xl">৳{discountPrice}</p>
                    </div>
                    <p>|</p>
                    <p>SKU: {sku}</p>
                </div>
                <p className="text-md">Select Package & Quantity</p>
                <p className="my-2 font-bold">Color</p>
                <p className="capitalize">{color}</p>
                <button className="capitalize my-5 bg-secondary w-full py-4 text-white font-bold hover:cursor-pointer hover:bg-[#F16622]">buy now</button>
            </div>
        </div>
    );
};

export default ProductDetails;