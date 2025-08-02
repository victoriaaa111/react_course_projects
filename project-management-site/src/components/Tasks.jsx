
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
            <h2>Tasks</h2>
            {tasks.length === 0 &&
                <p>This project does not have any tasks</p>
            }
            <ul>
                {tasks.map((task) => (
                    <li key={task.id} className={"flex justify-between my-4"}>
                        <span>{task.task}</span>
                        <button onClick={()=>{
                            onDeleteTask(task.id);
                        }}>Clear</button>
                    </li>
                ))}
            </ul>
            <div className="flex items-center justify-between ">
                <input ref={enteredTaskRef} className="bg-stone-200" type="text"/>
                <button onClick={handleClick}>Add Task</button>
            </div>
        </section>
            </>
    )
}