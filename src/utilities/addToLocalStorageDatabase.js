const getStoredCartProduct = () => {
    const cartProducts = localStorage.getItem('alishopCart');
    if (cartProducts) {
        return JSON.parse(cartProducts);
    } else {
        return [];
    }
}

const addToLocalStorage = (id) => {
    const storedProducts = getStoredCartProduct();

    if (storedProducts.includes(id)) {
        return false;
    } 
        storedProducts.push(id);
        const data = JSON.stringify(storedProducts);
        localStorage.setItem('alishopCart', data);
        return true;
}

const removeFromLocalStorage = (id) => {
    const storedData = getStoredCartProduct();
    const updatedData = storedData.filter(storedId => storedId !== id);
    const data = JSON.stringify(updatedData);
    localStorage.setItem('alishopCart', data);
    return updatedData;
}

export { getStoredCartProduct, addToLocalStorage, removeFromLocalStorage };