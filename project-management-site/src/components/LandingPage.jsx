import {useNavigate} from "react-router-dom";
export default function LandingPage() {
    const navigate = useNavigate();
    return (
        <div style={{
    background: 'radial-gradient(circle at center, #F4C9D6 80%, #3E2723 100%)',
  }}>
            <div className="flex flex-col items-center justify-center -translate-y-12 min-h-screen gap-2">
                <h1 className= "inline-block text-[#3E2723] text-7xl font-medium  font-roxb border-2 border-[#3E2723] rounded-full px-12 py-12">Project Management App</h1>
                <p className="text-[#3E2723] text-2xl font-montserrat">Plan, track, and manage your projects effortlessly.</p>
                <button className="text-[#3E2723] text-xl font-montserrat border-2 border-[#3E2723] rounded-full px-8 py-4 translate-y-4 hover:bg-[#3E2723] hover:text-[#F4C9D6] hover:border-[#F4C9D6]" onClick={()=>{navigate('/dashboard')}}>Go to Dashboard</button>
            </div>
        </div>

    )
}