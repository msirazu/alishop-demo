import sweetAlert from "../components/modals/sweetAlert";

const getStoredCartProduct = () => {
    const cartProducts = localStorage.getItem('cart');
    if (cartProducts) {
        return JSON.parse(cartProducts);
    } else {
        return [];
    }
}

const addToLocalStorage = (id) => {
    const storedProducts = getStoredCartProduct();

    if (storedProducts.includes(id)) {
        sweetAlert();
        return;
    } 
        storedProducts.push(id);
        const data = JSON.stringify(storedProducts);
        localStorage.setItem('cart', data)
}

export { getStoredCartProduct, addToLocalStorage };