import { useEffect, useState } from "react";
import HomeProductsList from "../products/HomeProductsList";

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const productsPromise = async() => {
            const productsRes = await fetch('/data/products-data.json');
            const data = await productsRes.json();
            return setProducts(data);
        }
        productsPromise();
    }, [])
    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 p-5 font-poppins">
            <section className="col-span-2 border border-gray-200">
                <h5 className="uppercase font-bold text-xl">category</h5>
            </section>
            <section className="col-span-10">
                <div>
                    <h5 className="uppercase font-bold text-xl text-center mb-2">products list</h5>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-2">
                    {products.map(product => <HomeProductsList key={product.id} product={product}/>)}
                </div>
            </section>
        </div>
    );
};

export default Home;