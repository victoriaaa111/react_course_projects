import Sidebar from "./Sidebar.jsx";
import NewProject from "./NewProject.jsx";
import NoProjectSelected from "./NoProjectSelected.jsx";
import {useState} from "react";
import SelectedProject from "./SelectedProject.jsx";

export default function DashBoard() {
    const [projectsState, setProjectsState] = useState({
        selectedProjectId : undefined,
        projects: [],
    })
    function handleStartAddProject() {
        setProjectsState(prevState=>{
            return {
                ...prevState,
                selectedProjectId: null
            }
        })
    }

    function handleAddProject(projectData) {
        setProjectsState(prevState=>{
            const newProject = {
                ...projectData,
                id: Math.random()
            }

            return {
                ...prevState,
                selectedProjectId: undefined,
                projects:[...prevState.projects, newProject]
            }
        })
    }

    function handleSelectProject(id) {
        setProjectsState(prevState=>{
            return {
                ...prevState,
                selectedProjectId: id
            }
        })
    }

    const selectedProject = projectsState.projects.find(project=> project.id === projectsState.selectedProjectId);
    let content = <SelectedProject project={selectedProject}/>;
    if(projectsState.selectedProjectId === null) {
        content = <NewProject onAdd={handleAddProject}/>
    }else if(projectsState.selectedProjectId === undefined) {
        content = <NoProjectSelected/>
    }

return(
    <div className="flex gap-8 bg-[#F4C9D6]">
    <Sidebar onStartAddProject={handleStartAddProject} onSelectProject={handleSelectProject} selectedProjectId={projectsState.selectedProjectId} projects={projectsState.projects}/>
        {content}
    </div>
)
}