import React from "react";
function RefTodo(props){
    console.log(props)
    return(
        <div>
        <li>{props.todo}
        <button onClick={()=>{props.d()}}>Delete</button>
        </li> 
        </div>
    )
}
export default RefTodo;