export default function ProductView({product, onClose}){
    return (
        <div className="fixed inset-0 z-50 bg-[#352118]/40 backdrop-blur-sm flex items-center justify-center px-4">
            <div className="bg-white p-6 rounded-lg w-full max-w-4xl relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-3 text-[#53608A]"
                >
                    ✕
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <img src={product.image} alt={product.name} className="w-full h-auto" />

                    <div className="text-left space-y-3 text-[#352118]">
                        <h2 className="text-2xl font-bold">{product.name}</h2>
                        <p className="">US${product.price}</p>
                        <p className="text-sm ">Model is 5'8"/173cm wearing a size S</p>

                        <select className="border border-[#d5ccc4] text-[#352118] px-4  py-2 rounded w-full">
                            <option>Select a Size</option>
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                        </select>

                        <button className="bg-[#352118] text-[#d5ccc4] px-4 py-2 w-full mt-2">
                            Add to Bag — US${product.price}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}