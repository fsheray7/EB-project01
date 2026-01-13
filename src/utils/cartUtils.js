
export const getCart = () => {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
};

export const addToCart = (product, quantity = 1) => {
    const cart = getCart();
    const existingItemIndex = cart.findIndex((item) => item.id === product.id);

    if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new CustomEvent("cartChange"));
};

export const removeFromCart = (productId) => {
    let cart = getCart();
    cart = cart.filter((item) => item.id !== productId);
    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new CustomEvent("cartChange"));
};

export const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    const cart = getCart();
    const item = cart.find((item) => item.id === productId);
    if (item) {
        item.quantity = newQuantity;
        localStorage.setItem("cart", JSON.stringify(cart));
        window.dispatchEvent(new CustomEvent("cartChange"));
    }
};

export const clearCart = () => {
    localStorage.removeItem("cart");
    window.dispatchEvent(new CustomEvent("cartChange"));
};
