import { useCart } from "./CartContext.jsx";
import { useState } from "react";

export default function ProductView({ product, onClose }) {
    const { addToCart, toggleCart } = useCart();
    const [selectedSize, setSelectedSize] = useState("");

    return (
        <div className="fixed inset-0 z-50 bg-[#352118]/40 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4">
            <div className="bg-white rounded-lg w-full max-w-4xl relative overflow-y-auto max-h-[150vh]">
                <button
                    onClick={() => {
                        onClose();
                        toggleCart();
                    }}
                    className="absolute top-2 right-3 text-[#53608A] text-lg sm:text-xl"
                >
                    ✕
                </button>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-6">

                    <div className="flex justify-center">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-auto max-h-[300px] sm:max-h-[400px] md:max-h-[500px] object-contain"
                        />
                    </div>

                    <div className="flex flex-col justify-between text-left space-y-3 text-[#352118]">
                        <div>
                            <h2 className="text-xl sm:text-2xl font-bold">{product.name}</h2>
                            <p className="text-lg sm:text-xl">US${product.price}</p>
                            <p className="text-xs sm:text-sm">
                                Model is 5'8"/173cm wearing a size S
                            </p>
                        </div>

                        <div className="space-y-3">
                            <select
                                onChange={(e) => setSelectedSize(e.target.value)}
                                className="border border-[#d5ccc4] text-[#352118] px-3 py-2 rounded w-full"
                            >
                                <option>Select a Size</option>
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                            </select>

                            <button
                                onClick={() => {
                                    if (!selectedSize) return alert("Please select a Size");
                                    addToCart(product, selectedSize);
                                }}
                                className="bg-[#352118] text-[#d5ccc4] px-4 py-2 w-full mt-1 text-sm sm:text-base"
                            >
                                Add to Bag — US${product.price}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
