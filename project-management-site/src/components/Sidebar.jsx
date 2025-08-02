export default function Sidebar({onStartAddProject, projects}) {
    return (
        <aside className = "w-1/3 text-[#F4C9D6] px-8 py-16  text-l bg-[#3E2723] min-h-screen md-w-72 rounded-r-xl">
            <h2 className="mb-8 font-roxb font-bold uppercase md:text-2xl">Your Projects</h2>
            <ul className="font-montserrat">
                {projects.map((item)=>(
                    <li className="py-2 font-montserrat hover:underline hover:decoration-dashed hover:underline-offset-4" key={item.id}>
                        {item.title}
                    </li>
                ))}
            </ul>
            <div>
                <button onClick={onStartAddProject} className="font-montserrat border rounded-full px-4 py-2 my-6  md:text-base hover:bg-[#F4C9D6] hover:text-[#3E2723] hover:border-[#3E2723]">+ Add Project</button>
            </div>

        </aside>
    )
}