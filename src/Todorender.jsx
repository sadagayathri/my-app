import React from "react";
import Todolistrender from "./Todolistrender";
function Todorender(props){
    return(
        <div>
           
            <li>
                {props.todo}
            <button onClick={()=>{props.deletetodo()}}>Delete</button> 
            {/* <button onClick={()=>{props.u()}}>Undo</button>                */}
            </li>
        </div>
    );
}
export default React.memo(Todorender);