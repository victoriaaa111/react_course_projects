import {useCart} from "./CartContext.jsx";

export default function Cart() {
    const {cart, removeFromCart,cartOpen, toggleCart} = useCart()

    return (
        <div className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${cartOpen ? "translate-x-0" : "translate-x-full"}`}>

            <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-lg font-bold">Your Bag</h2>
                <button onClick={toggleCart} className="text-gray-500">✕</button>
            </div>


            <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-4rem)]">
                {cart.length === 0 ? (
                    <p className="text-gray-500">Your bag is empty</p>
                ) : (
                    cart.map((product, index) => (
                        <div key={index} className="flex items-center justify-between">
                            <div>
                                <p className="font-medium">{product.name}</p>
                                <p className="text-sm text-gray-500">${product.price}</p>
                            </div>
                            <button onClick={() => removeFromCart(product.id)} className="text-red-500">Remove</button>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}