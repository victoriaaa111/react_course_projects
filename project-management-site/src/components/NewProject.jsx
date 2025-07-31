import Input from "./Input"
export default function NewProject(){
    return(
        <div className="w-2/3 min-h-screen py-16 px-8 font-montserrat text-l text-[#3E2723]">
            <h2 className="mb-8 font-roxb font-bold uppercase md:text-2xl">Add New Project</h2>
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><button className="border border-[#3E2723] rounded-full py-1 px-4 hover:bg-[#3E2723] hover:text-[#F4C9D6] hover:border-[#F4C9D6]">Save</button></li>
                <li><button className="border border-[#3E2723] rounded-full py-1 px-4 hover:bg-[#3E2723] hover:text-[#F4C9D6] hover:border-[#F4C9D6]">Cancel</button></li>
            </menu>
            <div>
                <Input label="Title"></Input>
                <Input label="Description" textArea></Input>
                <Input label="Due Date"></Input>
            </div>
        </div>
    )
}