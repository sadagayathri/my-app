import React from "react";
function Ipl2(props){
    console.log(props)
    
    var players=props.players
    var title=props.title


    return(
        <div className="mybox">
              <h1>{title}</h1>
              <ul>
                {
                    players.map((todo)=>{
                      return <li>{todo}
                      
                      </li>
                    })
                }
              </ul>
        </div>
    )
}
export default Ipl2;