import Tasks from "./Tasks.jsx";

export default function SelectedProject({project, onAddTask, onDeleteTask, tasks, onDeleteProject, onToggleTask}) {
    const formattedDate = new Date(project.date).toLocaleDateString("en-US",{
        year: "numeric",
        month: "short",
        day: "numeric"
    });
    return(
        <div className="w-2/3 min-h-screen py-16 px-8  text-l text-[#3E2723]">
            <header className="pb-4 mb-4 border-b-2 border-[#3E2723]">
                <div className="flex items-center justify-between">
                    <h1 className="font-roxb text-[#3E2723] font-medium text-2xl">{project.title}</h1>
                    <button onClick={onDeleteProject} className="text-[#3E2723] text-l font-montserrat border-2 border-[#3E2723] rounded-full px-4 py-2 hover:bg-[#3E2723] hover:text-[#F4C9D6] hover:border-[#F4C9D6]">Delete</button>
                </div>
                <p className="mb-2 font-montserrat ">{formattedDate}</p>
                <p className="inline-block font-montserrat whitespace-pre-wrap border-2 rounded-full border-dashed border-[#3E2723] px-2 py-2 mt-2 mb-2">{project.description}</p>
            </header>
            <Tasks tasks ={tasks} onToggleTask={onToggleTask} onAddTask={onAddTask} onDeleteTask={onDeleteTask}/>
        </div>
    )
}