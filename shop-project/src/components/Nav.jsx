import shoppingCart from "../assets/images/shopping-cart.svg";
import {useCart} from "./CartContext.jsx"

export default function Nav() {
    const {toggleCart} = useCart();
    return(
        <div className="flex justify-center items-center">
            <h1 className="absolute top-8 font-safira text-5xl md:text-7xl text-[#352118] text-center ">
                ARITZIA
            </h1>
            <button onClick={toggleCart}>
                <img className="fixed top-8 right-4 w-6" src={shoppingCart} alt=""/>
            </button>
        </div>
    )
}
