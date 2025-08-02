
import {useState} from "react";
export default function Tasks({tasks, onAddTask, onDeleteTask}) {
    const[enteredTask, setEnteredTask] = useState('');
    function handleChange(e){
        setEnteredTask(e.target.value);
    }
    function handleClick(){
        onAddTask(enteredTask);
        setEnteredTask('');
    }
    return(
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
                <input onChange={handleChange} value={enteredTask} className="bg-stone-200" type="text"/>
                <button onClick={handleClick}>Add Task</button>
            </div>
        </section>
    )
}