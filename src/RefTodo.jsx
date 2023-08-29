import React from "react";
function RefTodo(props){
    console.log(props)
    return(
        
        <li className="mybox">{props.todo}
        <button onClick={()=>{props.d()}}>Delete</button>
        <button>Done</button>
        <button>Undo</button>
        </li> 
        
    )
}
export default RefTodo;