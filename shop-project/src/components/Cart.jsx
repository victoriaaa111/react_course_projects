import {useCart} from "./CartContext.jsx";

export default function Cart() {
    const {cart, removeFromCart,cartOpen, toggleCart, total} = useCart()

    return (
        <div className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${cartOpen ? "translate-x-0" : "translate-x-full"} flex flex-col`}>

            <div className="flex justify-between items-center p-4 bg-[#f8f8f8]">
                <h2 className="font-safira text-xl font-bold text-[#352118]">Your Bag</h2>
                <button onClick={toggleCart} className="text-gray-500 font-josefin text-l">Close</button>
            </div>

            <div className="px-4 overflow-y-auto flex-1 font-josefin text-[#352118]">
                {cart.length === 0 ? (
                    <p className="pt-4 text-l">Your bag is empty</p>
                ) : (
                    cart.map((product, index) => (
                        <div key={index} className="flex items-start justify-between border-b border-[#53608a] py-4">
                            <img className="w-20" src={product.image}/>
                            <div>
                                <p className="font-medium">{product.name}</p>
                                <p className="text-sm text-[#53608a]">
                                    Size: {product.size} - ${product.price} × {product.quantity}
                                </p>
                            </div>
                            <button onClick={() => removeFromCart(product.id, product.size)} className="text-red-500 text-sm">✕</button>
                        </div>
                    ))
                )}
            </div>


            <div className="p-4 border-t font-josefin text-xl">
                <p className="text-center text-[#352118]">Your total: {total} $</p>
            </div>

        </div>

    )
}