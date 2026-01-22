import { use } from "react";
import DataContext from "../../auth/context/DataContext";
import { getStoredCartProduct } from "../../utilities/addToLocalStorageDatabase";

const Checkout = () => {
    const data = use(DataContext);
    const localStorageData = getStoredCartProduct();
    const cartProduct = data.filter(product => localStorageData.includes(product.id));
    return (
        <div className="">
            {cartProduct.map(p => 
                <div key={p.id} className="flex items-center border border-gray-200 gap-5 m-5 p-3 font-poppins hover:border-secondary hover:cursor-pointer">
                    <div className="">
                        <img className="w-25" src={p.imageUrl}/>
                    </div>
                    <div>
                        <h2 className="font-bold">{p.title}</h2>
                        <p className="">
                            <span className="line-through">
                                {`৳${p.price}`}
                            </span>
                            <span className="font-bold text-xl text-third">
                                {`৳${p.discountPrice}`}
                            </span>
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Checkout;