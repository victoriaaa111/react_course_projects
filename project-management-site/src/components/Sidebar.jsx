export default function Sidebar(){
    return (
        <aside className = "w-1/3 text-[#F4C9D6] px-8 py-16 font-montserrat text-l bg-[#3E2723] min-h-screen md-w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl">Your Projects</h2>
            <div>
                <button className="border rounded-full px-4 py-2 md:text-base hover:bg-[#F4C9D6] hover:text-[#3E2723] hover:border-[#3E2723]">+ Add Project</button>
            </div>
            <ul></ul>
        </aside>
    )
}