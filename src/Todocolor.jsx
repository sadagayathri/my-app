import React from "react";
import { ObjectHTMLAttributes } from "react";
function Todocolor(){
    var [todos,setTodos]=React.useState([
        {
            title:'clear bills',
            status:false
          },
          {
            title:'Moksha School',
            status:true
          },
          {
            title:'Manas Bus Fee',
            status:false
          },
          {
            title:'Gold Bill',
            status:false
          },
          {
            title:'Current Bill',
            status:true
          }
    ]);
    function done(i){
      var temp=[...todos]
      temp[i].status==true?(temp[i].status=false):(temp[i].status=true)
      setTodos([...temp])
    }
    return(
        <div>
            <ul>
                {
                    todos.map((todo,i)=>{
                        return <li style={todo.status===true?{backgroundColor:'green'}:{backgroundColor:'red'}}>
                          {todo.title}
                          <button onClick={()=>{done(i)}}>Done</button>
                          </li>
                    })
                }
            </ul>
        </div>
    )
}
export default Todocolor;