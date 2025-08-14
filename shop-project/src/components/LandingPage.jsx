import {useRef} from "react";
export default function LandingPage() {
    const productRef = useRef(null);
    const handleScroll=()=>{
        productRef.current?.scrollIntoView({behavior: "smooth"});
    }
    return (
        <>
            <section className="min-h-screen bg-[#f8f8f8]">
                <h1 className="font-safira text-7xl text-[#352118] text-center pt-13">
                    ARITZIA
                </h1>
                <hr className="border-t border-[#53608a] my-4" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-20 w-full max-w-7xl mx-auto my-16">

                    <div className="text-center opacity-95">
                        <img
                            className="block w-full opacity-75"
                            src="../src/assets/images/img1.png"
                            alt="outfit image 1"
                        />
                        <h2 className="text-[#352118] font-josefin font-bold text-2xl mt-4 pb-4">Everyday Luxury.
                        </h2>
                    </div>

                    <div className="text-center opacity-90">
                        <img
                            className="block w-full md:translate-y-8 md:scale-125"
                            src="../src/assets/images/img2.png"
                            alt="outfit image 2"
                        />
                    </div>

                    <div className="text-center opacity-95">
                        <img
                            className="block w-full opacity-75"
                            src="../src/assets/images/img3.png"
                            alt="outfit image 3"
                        />
                        <h2 className="mt-4 text-[#352118] font-josefin font-bold text-2xl">
                            To Elevate Your World.
                        </h2>
                    </div>
                </div>

                <hr className="border-t border-[#53608a] my-8" />

                <div className="flex items-center justify-center">
                    <button onClick={handleScroll} className=" text-[#352118] border border-[#d5ccc4] rounded-sm bg-[#d5ccc4] font-josefin font-bold px-4 py-3 text-xl uppercase">Start Shopping</button>
                </div>

            </section>
            <div ref={productRef} />
        </>
    )
}