import React from "react";

function Ipl(props){
    return(
        <div className="mybox">
            <h1>{props.teamname}</h1>
            {
                props.team.map((player)=>{
                    return <li>{player}</li>
                })
            }
        </div>
    )
}
export default Ipl;