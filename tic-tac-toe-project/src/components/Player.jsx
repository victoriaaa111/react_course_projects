import {useState} from "react";

export default function Player({name, symbol}){
    const [isEditing, setIsEditing] = useState(false);

    function clickHandler(){
        setIsEditing(!isEditing);
    }
    return(
        <li>
            <span className='player'>
                {!isEditing &&
                    <span className='player-name'>{name}</span>
                }
                {isEditing &&
                    <input type="text" placeholder="Enter name" required/>
                }
              <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={clickHandler}>{!isEditing ? "Edit" : "Save"}</button>
        </li>
    );
}