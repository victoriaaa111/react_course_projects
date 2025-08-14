import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [cartOpen, setCartOpen] = useState(false);

    function addToCart(product) {
        setCart(prevState => [...prevState, product]);
        setCartOpen(true);
    }

    function removeFromCart(productId) {
        setCart(prevState => prevState.filter(item => item.id !== productId));
    }

    function clearCart() {
        setCart([]);
    }

    function toggleCart() {
        setCartOpen(prev => !prev);
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            clearCart,
            cartOpen,
            toggleCart
        }}>
            {children}
        </CartContext.Provider>
    );
};
