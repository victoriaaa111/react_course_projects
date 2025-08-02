import Input from "./Input"
import {useRef} from "react";
import Modal from "./Modal.jsx";

export default function NewProject({onAdd}){
    const modal = useRef('');
    const titleRef = useRef('');
    const descriptionRef = useRef('');
    const dateRef = useRef('');
    function handleSave(){
        const enteredTitle = titleRef.current.value;
        const enteredDescription = descriptionRef.current.value;
        const enteredDate = dateRef.current.value;

        if (enteredTitle.trim()==='' || enteredDescription.trim() === '' && enteredDate.trim()===''){
            modal.current.open()
            return;
        }
        onAdd({title:enteredTitle,
                description:enteredDescription,
                date:enteredDate});
    }
    return(
        <>
        <Modal ref={modal} buttonCaption="Close">
            <h2 className="mb-4 font-roxb font-bold uppercase md:text-2xl text-[#3E2723]">Invalid Input</h2>
            <p className="text-l font-montserrat text-[#3E2723] font-bold">You forgot to enter a value.</p>
            <p className="text-l font-montserrat text-[#3E2723] font-bold">Please make sure you provide a valid input for each field.</p>
        </Modal>
        <div className="w-2/3 min-h-screen py-16 px-8 font-montserrat text-l text-[#3E2723]">
            <h2 className="mb-8 font-roxb font-bold uppercase md:text-2xl">Add New Project</h2>
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><button onClick={handleSave} className="border border-[#3E2723] rounded-full py-1 px-6 hover:bg-[#3E2723] hover:text-[#F4C9D6] hover:border-[#F4C9D6]">Save</button></li>
                <li><button className="border border-[#3E2723] rounded-full py-1 px-4 hover:bg-[#3E2723] hover:text-[#F4C9D6] hover:border-[#F4C9D6]">Cancel</button></li>
            </menu>
            <div>
                <Input type="text" ref={titleRef} label="Title"></Input>
                <Input ref={descriptionRef} label="Description" textArea></Input>
                <Input type="date" ref={dateRef} label="Due Date"></Input>
            </div>
        </div>
        </>
    )
}