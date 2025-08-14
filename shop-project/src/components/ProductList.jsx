import products from "../products.json"
import {useState} from "react";
import ProductView from "./ProductView.jsx";
export default function ProductList() {
    const [viewProduct, setViewProduct] = useState(null);
    return(
        <>
            <section className="min-h-screen">
                <div className="grid grid-cols-2 justify-items-center gap-4  max-w-6xl mx-auto py-12 px-4 font-josefin mt-8 md:grid-cols-3">
                    {products.map((product)=>(
                        <div key={product.id} className="text center">
                            <img src={product.image} alt={product.name} className=" w-72" />
                            <h3 className="mt-4 font-bold text-md text-[#352118] lg:text-xl">{product.name}</h3>
                            <p className="text-md lg:text-lg text-[#352118]">US${product.price}</p>
                            <button className="text-[#d5ccc4] bg-[#352118] px-2  mt-2" onClick={()=>setViewProduct(product)}>Quick View</button>
                        </div>
                    ))}
                    {viewProduct && (
                        <ProductView
                            product={viewProduct}
                            onClose={() => setViewProduct(null)}
                        />
                    )}
                </div>
            </section>

        </>
    )
}