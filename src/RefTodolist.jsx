import React from "react";
import RefTodo from './RefTodo'
function RefTodolist(){
    const [todos,setTodo]=React.useState(['gayathri','sada','srivani','subbarao','suryapavan'])
    function todo(){
        var x=document.getElementById('inp').value
        setTodo([...todos,x])
    }
    function delTodo(i){
        var temp=[...todos]
        temp.splice(i,1)
        setTodo([...temp])
    }
    return(
        <div className="mybox">
            <input type="text" id='inp'/>
            <button onClick={()=>{todo()}}>Add</button>
            <h1>Refactoring Todolist</h1>
            <h1>{todo}</h1>
            <ul>
            {
            todos.map((t,i)=>{
                return <RefTodo todo={t} d={delTodo} t={todo}></RefTodo>
            })
        }
    </ul>  
            
        </div>
    )
}
export default RefTodolist;