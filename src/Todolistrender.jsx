import React, { useCallback } from "react";
import Todorender from "./Todorender";
function Todolistrender(){
    // console.log("parent first line")
    const [todos,setTodo]=React.useState(['learn coding','get job','get car','buy house','go home'])
    function todo(){
        var x=document.getElementById('inp1').value
        setTodo([...todos,x])
    }
      function delTodo(i){
        console.log(i)
        var temp=[...todos]
         temp.splice(i,1)
        setTodo([...temp])
    }

    // function undo(i){
    //     var temp=[...todos]
    //     var x=temp.splice(props.i,1)
    //    setTodo([...todos,...x])
    // }
    return(
        <div className="mybox">
            {/* {console.log("parent component")} */}
            <input type="text" id='inp1'/>
            <button onClick={()=>{todo()}}>Add</button>
            
            <h1>Todolist Refactoring render</h1>
            <h1>{todo}</h1>
            <ul>
                {
                    todos.map((todo,i)=>{
                        return <Todorender todo={todo} deletetodo={()=>{delTodo()}} i={i} ></Todorender>
                    })
                }
            </ul>
        </div>
    )
}
export default Todolistrender;