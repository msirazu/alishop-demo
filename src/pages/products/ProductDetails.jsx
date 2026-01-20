import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
    const productsData = useLoaderData();
    console.log(productsData)
    return (
        <div>
            product details
        </div>
    );
};

export default ProductDetails;