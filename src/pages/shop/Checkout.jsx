import { use } from "react";
import DataContext from "../../auth/context/DataContext";
import { getStoredCartProduct } from "../../utilities/addToLocalStorageDatabase";

const Checkout = () => {
    const data = use(DataContext);
    const localStorageData = getStoredCartProduct();
    const cartProduct = data.filter(product => localStorageData.includes(product.id))
 
    return (
        <div className="h-screen">
            total products: {cartProduct.length}
        </div>
    );
};

export default Checkout;