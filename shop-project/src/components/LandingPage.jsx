export default function LandingPage() {
    return (
        <>
            <section className="min-h-screen bg-[#f8f8f8]">
                <h1 className="font-safira text-7xl text-[#352118] text-center pt-13">
                    ARITZIA
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-20 w-full max-w-7xl mx-auto my-16">
                    <img className="block w-full opacity-75 " src="../src/assets/images/img1.png" alt="outfit image 1" />
                    <img className="block w-full md:translate-y-8 md:scale-125" src="../src/assets/images/img2.png" alt="outfit image 2" />
                    <img className="block w-full opacity-75" src="../src/assets/images/img3.png" alt="outfit image 3" />
                </div>
                <div className="flex items-center justify-center gap-20 pt-16 md:translate-y-8 ">
                    <div className="flex flex-col gap-1 ">
                        <h2 className="text-[#352118] font-josefin font-bold text-4xl">Everyday Luxury.
                        </h2>
                        <h2 className="text-[#352118] font-josefin font-bold text-4xl">
                            To Elevate Your World.
                        </h2>
                    </div>
                    <button className="text-[#352118] border border-[#d5ccc4] rounded-lg bg-[#d5ccc4] font-josefin font-bold px-4 py-3 text-xl">Start Shopping</button>
                </div>

            </section>

        </>
    )
}