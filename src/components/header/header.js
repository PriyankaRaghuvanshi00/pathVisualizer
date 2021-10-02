import "./header.css"
import React, { useEffect, useState } from "react"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useHistory } from "react-router";
import VisibilityIcon from '@material-ui/icons/Visibility';
import Pen from '@material-ui/icons/Create';
export default function Header({ AllGood, setalgo }) {
   const Algo = ["A*", "Dijkstra", "DFS", "BFS"]
   let history = useHistory();
   const [class1, setclass1] = useState('algo-button')
   const [class2, setclass2] = useState('algo-button')
   let location = history.location.pathname

   function onHandler(p) {
      history.push(`${p}`);
      if (p == '/') {
         document.getElementById("1").classList.add("double-line");
         document.getElementById("2").classList.remove("double-line");
      }
      else if (p == "/theory") {
         document.getElementById("1").classList.remove("double-line");
         document.getElementById("2").classList.add("double-line");
      }
   }
   return (
      <div className="algo">
         {!AllGood ? <div className="algo-button" style={{ textAlign: "center" }} onClick={() => { document.getElementsByClassName("drop-down")[0].classList.toggle("show") }}>
            Algorithm
            <ExpandMoreIcon></ExpandMoreIcon>
         </div> : null}
         {
            AllGood ?
               <div className={`algo-button ${location == '/' ? 'double-line' : ''}`} id="1" style={{ marginRight: "50px", textShadow: "none" }} onClick={() => { onHandler('/') }}>
                  Visualize Algorithm <span>👁️‍🗨️</span>
               </div>
               : null
         }
         {
            AllGood ?
               <div className="algo-button" id="2" style={{ textShadow: "none" }} onClick={() => { onHandler('/theory') }}>
                  Learn Algorithm <Pen style={{ color: 'black', position: 'relative', top: '3px' }} />
               </div>
               : null
         }
         <div className="drop-down" >
            {Algo.map(i => <div className={`algo-option ${i}`} onClick={() => {
               setalgo(i)
               document.getElementsByClassName("drop-down")[0].classList.toggle("show")
            }}>{i}</div>)}
         </div>
      </div >
   )
}
