import {useRef} from "react";
import Nav from "./Nav.jsx";
export default function LandingPage() {
    const productRef = useRef(null);
    const handleScroll=()=>{
        productRef.current?.scrollIntoView({behavior: "smooth"});
    }
    return (
        <>
            <Nav/>
            <section className="flex flex-col justify-center min-h-screen bg-[#f8f8f8] pt-24">

                    <hr className="border-t border-[#53608a] my-4" />
                <div className="px-6 grid gap-6 grid-cols-1 justify-items-center sm:gap-8 md:gap-16 md:grid-cols-3 sm:max-w-3xl md:max-w-5xl lg:gap-20 w-full lg:max-w-7xl  mx-auto my-16">

                    <div className="text-center opacity-95 ">
                        <img
                            className="block w-l opacity-75 md:w-full "
                            src="../src/assets/images/img1.png"
                            alt="outfit image 1"
                        />
                        <h2 className="text-[#352118] font-josefin font-bold md:text-l lg:text-2xl md:mt-4 mt-8 pb-4">Everyday Luxury.
                        </h2>
                    </div>

                    <div className="text-center opacity-90">
                        <img
                            className="block w-l md:translate-y-8 md:w-full  md:scale-125"
                            src="../src/assets/images/img2.png"
                            alt="outfit image 2"
                        />
                    </div>

                    <div className="text-center opacity-95 grid grid-cols-1">
                        <img
                            className="order-2 md:order-1 block w-l md:w-full opacity-75"
                            src="../src/assets/images/img3.png"
                            alt="outfit image 3"
                        />
                        <h2 className="mt-4 pb-8 order-1 md:order-2 text-[#352118] font-josefin font-bold md:text-l lg:text-2xl">
                            To Elevate Your World.
                        </h2>
                    </div>
                </div>

                <hr className="border-t border-[#53608a] lg:my-8 md:my-4 my-2" />

                <div className="flex items-center justify-center">
                    <button onClick={handleScroll} className="text-sm md:text-xl lg:text-2xl my-6 text-[#352118] border border-[#d5ccc4] rounded-sm bg-[#d5ccc4] font-josefin font-bold px-4 py-3 text-xl uppercase">Start Shopping</button>
                </div>
            </section>
            <div ref={productRef} />
        </>
    )
}