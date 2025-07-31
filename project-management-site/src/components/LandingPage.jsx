import {useNavigate} from "react-router-dom";
export default function LandingPage() {
    const navigate = useNavigate();
    return (
        <div className="bg-[#F4C9D6] ">
            <div className="bg-[#F4C9D6] flex flex-col items-center justify-center -translate-y-16 min-h-screen gap-2">
                <h1 className= "inline-block text-[#3E2723] text-7xl font-medium  font-roxb border-2 border-[#3E2723] rounded-full px-12 py-12">Project Management App</h1>
                <p className="text-[#3E2723] text-2xl font-montserrat">Plan, track, and manage your projects effortlessly.</p>
                <button className="text-[#3E2723] text-xl font-montserrat border-2 border-[#3E2723] rounded-full px-8 py-4 translate-y-4" onClick={()=>{navigate('/dashboard')}}>Go to Dashboard</button>
            </div>
        </div>

    )
}