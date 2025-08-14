import products from "../products.json"
import {useState} from "react";
import ProductView from "./ProductView.jsx";
export default function ProductList() {
    const [viewProduct, setViewProduct] = useState(null);
    return(
        <>
            <section className="min-h-screen">
                <div className="grid grid-cols-1 md:grid-cols-3  gap-8 max-w-6xl mx-auto py-12 font-josefin mt-8">
                    {products.map((product)=>(
                        <div key={product.id} className="text center">
                            <img src={product.image} alt={product.name} className=" w-72" />
                            <h3 className="mt-4 font-bold text-xl text-[#352118]">{product.name}</h3>
                            <p className="text-[#352118]">US${product.price}</p>
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