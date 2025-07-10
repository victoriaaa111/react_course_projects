import {useState} from "react";

export default function Player({initialName, symbol, isActive}){
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);
    function clickHandler(){
        setIsEditing((editing)=> !editing);
    }
    function handleNameChange(e){
        setPlayerName(e.target.value);
    }
    return(
        <li className={isActive? 'active' : undefined}>
            <span className='player'>
                {!isEditing &&
                    <span className='player-name'>{playerName}</span>
                }
                {isEditing &&
                    <input type="text"  value = {playerName} required onChange={handleNameChange}/>
                }
              <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={clickHandler}>{!isEditing ? "Edit" : "Save"}</button>
        </li>
    );
}