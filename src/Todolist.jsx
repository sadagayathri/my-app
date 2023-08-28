import React from "react";
function Todolist(){
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
            <h1>Todolist</h1>
            <h1>{todo}</h1>
            <ul>
                {
                    todos.map((todo,i)=>{
                        return <li>{todo}
                        <button onClick={()=>{delTodo(i)}}>DElete</button>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}
export default Todolist;