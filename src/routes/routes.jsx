import { createBrowserRouter } from 'react-router-dom'; 
import HomeLayout from '../layouts/HomeLayout';
import Home from '../pages/home/Home';
import NotFound from '../pages/not-found/NotFound';
import ProductDetails from '../pages/products/ProductDetails';
import Checkout from '../pages/shop/Checkout';

const router = createBrowserRouter([
    {path: '/', element: <HomeLayout/>, children: [
        {path: '', element: <Home/>},
        {path: 'product-details/:Id', element: <ProductDetails/>, loader: async() => {
            const productRes = await fetch('/data/products-data.json');
            return productRes.json();
        }},
        {path: 'checkout', element: <Checkout/>}
    ], HydrateFallback: ()=> {
        return <p>loading......</p>
    }},
    {path: '*', element: <NotFound/>}
]);

export default router;