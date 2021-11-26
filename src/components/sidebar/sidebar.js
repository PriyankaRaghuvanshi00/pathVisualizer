import React, { useEffect, useRef } from 'react'
import "./sidebar.css"
import RefreshIcon from '@material-ui/icons/Refresh';

export default function SideBar({ setalgo, setstopVisualize, shortesPathSpeed, setshortesPathSpeed, setshowModel, algo, RandomWalls, setRandomWalls, StartVisualize, setStartVisualize, setclearWalls, setnode, Visualize, setVisualize, speedVal, setWalls, setspeedVal, cleanPath }) {
   const speed = useRef();
   const option = (name) => {
      if (name == "walls") {
         setWalls(false);
         cleanPath(false);
         setclearWalls(true)
         setStartVisualize(false)
         setRandomWalls(false)
      }
      else if (name == "path") {
         setWalls(false);
         cleanPath(true);
         setStartVisualize(false)
         setclearWalls(false)
         setnode(false)
         setRandomWalls(false)
      }
      else if (name == "setWalls") {
         setWalls(true);
         cleanPath(false);
         setStartVisualize(false)
         setnode(false)
         setclearWalls(false)
         setRandomWalls(false)
      }
      else if (name == "nodes") {
         setWalls(false);
         cleanPath(false);
         setStartVisualize(false)
         setnode(true)
         setclearWalls(false)
         setRandomWalls(false)
      }
      else if (name == "reload") {
         setalgo("");
      }
      else if (name === "randomWalls") {
         setWalls(false);
         cleanPath(false);
         setStartVisualize(false)
         setnode(false)
         setclearWalls(false)
         setRandomWalls(true)
      }
      if (StartVisualize) {
         setstopVisualize(true);
      }
   }
   function onVisualize() {
      if (algo !== "") {
         setWalls(false);
         cleanPath(false);
         setnode(false)
         setclearWalls(false)
         setstopVisualize(false)
         setRandomWalls(false)
         setStartVisualize(true);
      }
      else {
         setshowModel(true);
      }
   }
   function resetAlgo() {
      if (algo != "");
      {
         setalgo("");
         option("path");
      }
   }
   return (
      <div className="options">
         <div className="controller">
            <div className="speed">Visited Node Speed: {speedVal} ms</div>
            <div className="speed-controller">
               <div className="hint">Fast</div>
               <input type="range" id="speed" ref={speed} onChange={() => { setspeedVal(document.getElementsByClassName("slider")[0].value); }} min="10" max="500" className="slider"></input>
               <div className="hint">Slow</div>
            </div>
            <div className="speed" >Shortest Path Node Speed: {shortesPathSpeed} ms</div>
            <div className="speed-controller">
               <div className="hint">Fast</div>
               <input type="range" id="shortesPathSpeed" ref={speed} onChange={() => { setshortesPathSpeed(document.getElementById("shortesPathSpeed").value); }} min="10" max="500" className="slider"></input>
               <div className="hint">Slow</div>
            </div>
         </div>
         <div className="extra-options">
            <div className="button" onClick={() => { onVisualize() }}>Visualize 👁️‍🗨️</div>
            <div className="cleaning-funct" style={{ display: 'flex' }} onClick={() => { option("setWalls") }}><div className="hints-block" style={{ marginTop: '2px', backgroundColor: 'black' }}></div>Set Walls</div>
            <div className="cleaning-funct" onClick={() => { option("nodes") }}>Set Nodes</div>
            <div className="cleaning-funct" style={{ display: 'flex' }} onClick={() => { option("walls") }}><div className="hints-block" style={{ marginTop: '2px', backgroundColor: 'black' }}></div>Clear Walls</div>
            {/* <div className="cleaning-funct" onClick={() => { option("randomWalls") }}>Set Random Walls</div> */}
            <div className="cleaning-funct" onClick={() => { option("path") }}>Clear Path </div>
            <RefreshIcon className="cleaning-funct tooltip" onClick={() => { resetAlgo(); }} onMouseEnter={() => { window.innerWidth <= 900 ? console.log("") : document.getElementsByClassName("tooltiptext")[0].style.display = "flex"; }} onMouseLeave={() => { window.innerWidth <= 900 ? console.log("") : document.getElementsByClassName("tooltiptext")[0].style.display = "none"; }} />
            <div class="tooltiptext">Reset Algorithm</div>
         </div>
      </div>
   )
}
