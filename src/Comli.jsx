import React from "react";
import Ipl from "./Ipl";
function Comli(){
    const [allteams, setAllteams] = React.useState([
        {
          teamname:'Mumbai Indians',
          players:[
            'Rohit',
            'surya',
            'kishan',
            'bhumra',
            'david'
          ]
        },
        {
          teamname:'Royal Challengers Bengaluru',
          players:[
            'Faf',
            'Virat',
            'DK',
            'Maxi',
            'Siraj'
          ]
        },
        {
          teamname:'Sunrisers Hyderabad',
          players:[
            'Kane Williamson',
            'Manish',
            'Bhuvi',
            'Warner',
            'Karan'
          ]
        },
        {
          teamname:'Chennai Super Kings',
          players:[
            'Dhoni',
            'Raina',
            'Jadeja',
            'Rayudu',
            'Ben Stokes'
          ]
        }
      ])
    return(
        <div className="mybox">
             <ul>
      {
        allteams.map((team)=>{
          return <Ipl team={team.players} teamname={team.teamname}></Ipl>
        })
      }
    </ul>
        </div>
       
    )
}
export default Comli;