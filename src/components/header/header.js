import "./header.css"
import React from "react"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useHistory } from "react-router";

export default function Header({ AllGood, setalgo }) {
   const Algo = ["A*", "Dijkstra", "Prims", "kruskal"]
let history=useHistory();
   return (
      <div className="algo">
         {!AllGood ? <div className="algo-button" style={{ textAlign: "center" }} onClick={() => { document.getElementsByClassName("drop-down")[0].classList.toggle("show") }}>
            Algorithm
            <ExpandMoreIcon></ExpandMoreIcon>
         </div> : null}
         {
            AllGood ?
            <div className="algo-button" style={{marginRight:"10px"}} onClick={()=>{history.push("/")}}>
            Visualize
         </div>
          : null
         }
           {
            AllGood ?
            <div className="algo-button" onClick={()=>{history.push("/theory")}}>
            Theory
         </div>
          : null
         }
         <div className="drop-down" >
            {Algo.map(i => <div className={`algo-option ${i}`} onClick={() => {
               setalgo(i)
               document.getElementsByClassName("drop-down")[0].classList.toggle("show")
            }}>{i}</div>)}
         </div>
      </div>
   )
}
