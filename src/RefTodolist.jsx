import React from "react";
import RefTodo from './RefTodo'
function RefTodolist(){
    const [todos,setTodo]=React.useState(['gayathri','sada','srivani','subbarao','suryapavan'])
    function todo(){
        var x=document.getElementById('inp2').value
        setTodo([...todos,x])
    }
    function delTodo(i){
        var temp=[...todos]
        temp.splice(i,1)
        setTodo([...temp])
    }
    return(
        <div>
            <input type="text" id='inp2'/>
            <button onClick={()=>{todo()}}>Add</button>
            <h1>Refactoring Todolist</h1>
            <h1>{todo}</h1>
            <ol>
            {
            todos.map((t,i)=>{
                return <RefTodo todo={t} d={delTodo} t={todo}></RefTodo>
            })
        }
    </ol>  
            
        </div>
    )
}
export default RefTodolist;