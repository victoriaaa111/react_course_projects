
import {useRef} from "react";
import Modal from "./Modal.jsx";
export default function Tasks({tasks, onAddTask, onDeleteTask}) {
    const enteredTaskRef = useRef();
    const modal = useRef('');

    function handleClick(){
        const enteredTask = enteredTaskRef.current.value;
        if (enteredTask.trim()===''){
            modal.current.open()
            return;
        }
        onAddTask(enteredTask);
        enteredTaskRef.current.value = '';
    }
    return(
        <>
        <Modal ref={modal} buttonCaption="Close">
            <h2 className="mb-4 font-roxb font-bold uppercase md:text-2xl text-[#3E2723]">Invalid Input</h2>
            <p className="text-l font-montserrat text-[#3E2723] font-bold">You forgot to enter a value for the task text.</p>
            <p className="text-l font-montserrat text-[#3E2723] font-bold">Please make sure you provide a valid input.</p>
        </Modal>
        <section>
            <h2 className="font-montserrat text-xl mb-2 text-[#3E2723]">Tasks</h2>

                {tasks.length === 0 &&
                    <p className="font-montserrat text-l text-[#3E2723] border-2 border-[#3E2723] border-dashed py-2 px-3 rounded-full inline-block">This project does not have any tasks</p>
                }

                <ul>
                    {tasks.map((task) => (
                        <li key={task.id} className={"flex justify-between my-4 "}>
                            <span className="border-2 border-[#3E2723] border-dashed py-3 px-3 rounded-full inline-block">{task.task}</span>
                            <button className="text-[#3E2723] text-l font-montserrat border-2 border-[#3E2723] rounded-full px-4 py-2 hover:bg-[#3E2723] hover:text-[#F4C9D6] hover:border-[#F4C9D6]" onClick={()=>{
                                onDeleteTask(task.id);
                            }}>Clear</button>
                        </li>
                    ))}
                </ul>


            <div className="flex items-center justify-between ">
                <input ref={enteredTaskRef} className="w-2/3 mt-4 p-1 border-2 rounded-full border-[#3E2723] bg-stone-200 text-[#3E2723] focus:outline-none focus:border-dashed focus:border-2" type="text"/>
                <button className="text-[#3E2723] text-l font-montserrat border-2 border-[#3E2723] rounded-full px-4 py-2 hover:bg-[#3E2723] hover:text-[#F4C9D6] hover:border-[#F4C9D6]" onClick={handleClick}>Add Task</button>
            </div>
        </section>
            </>
    )
}