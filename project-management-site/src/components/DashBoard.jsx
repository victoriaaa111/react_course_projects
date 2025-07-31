import Sidebar from "./Sidebar.jsx";
import NewProject from "./NewProject.jsx";

export default function DashBoard() {
return(
    <div className="flex gap-8 bg-[#F4C9D6]">
    <Sidebar />
        <NewProject/>
    </div>
)
}