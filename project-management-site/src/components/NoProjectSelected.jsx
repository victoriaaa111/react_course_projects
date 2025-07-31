export default function NoProjectSelected() {
    return (
        <div className="flex flex-col items-center justify-center gap-2 my-4 w-2/3 min-h-screen -translate-y-10">
            <h1 className="text-7xl text-center">📁</h1>
            <h2 className="text-3xl font-bold font-roxb text-[#3E2723]">No Project Selected</h2>
            <p className="text-l font-montserrat text-[#3E2723]">Select a project or get started with a new one</p>
        </div>
    )
}