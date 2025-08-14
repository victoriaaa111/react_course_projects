import { useState , useEffect} from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [cartOpen, setCartOpen] = useState(false);

    function addToCart(product, selectedSize) {

        setCart(prevState => {
            const existingItemIndex = prevState.findIndex(item => (item.id === product.id && item.size === selectedSize));
            if (existingItemIndex >= 0) {
                return prevState.map((item, index) =>
                    index === existingItemIndex
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }else{
                return [...prevState,{...product, size:selectedSize, quantity:1}];
            }

        });
        setCartOpen(true);
    }

    function removeFromCart(productId, selectedSize) {
        setCart(prevState => prevState.filter(item => !(item.id === productId && item.size === selectedSize)));
    }

    function clearCart() {
        setCart([]);
    }

    function toggleCart() {
        setCartOpen(prev => !prev);
    }

    useEffect(() => {
        const newTotal = cart.reduce(
            (acc, item) => acc + item.price * item.quantity,
            0
        );
        setTotal(newTotal);
    }, [cart]);

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            clearCart,
            cartOpen,
            toggleCart,
            total
        }}>
            {children}
        </CartContext.Provider>
    );
};
