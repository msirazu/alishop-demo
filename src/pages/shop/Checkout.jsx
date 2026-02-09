import { use } from "react";
import DataContext from "../../auth/context/DataContext";
import { getStoredCartProduct, removeFromLocalStorage } from "../../utilities/addToLocalStorageDatabase";
import { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

const Checkout = () => {
    const [cart, setCart] = useState([]);
    const handleDelete = (id) => {
        const updatedIds = removeFromLocalStorage(id);
        setCart(updatedIds);
        toast.success('delete successfully')
    }
    const data = use(DataContext);
    useEffect(()=>{
    const dataPro = async() => {
    const localStorageData = getStoredCartProduct();
    setCart(localStorageData);
    }
    dataPro();
    }, []);
    const cartProduct = data.filter(product => cart.includes(product.id));
    return (
        <div className="">
            {cartProduct.map(p => 
                <div key={p.id} className="flex items-center justify-start border border-gray-200 gap-5 m-5 p-3 font-poppins hover:border-secondary hover:cursor-pointer">
                    <div className="flex-1">
                        <img className="w-25" src={p.imageUrl}/>
                    </div>
                    <div className="flex-3">
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
                    <div className="bg-gray-200 p-2">
                    <MdDelete className="text-2xl hover:text-green-500" onClick={()=> handleDelete(p.id)}/>
                    </div>

                </div>
            )}
        </div>
    );
};

export default Checkout;