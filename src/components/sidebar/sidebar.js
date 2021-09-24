import React from 'react'
import "./sidebar.css"
import RefreshIcon from '@material-ui/icons/Refresh';
import { dijkstra } from '../../algorithms/dijkstra';

export default function SideBar({ setshowModel, algo, RandomWalls, setRandomWalls, StartVisualize, setStartVisualize, setclearWalls, setnode, Visualize, setVisualize, speedVal, setWalls, setspeedVal, cleanPath }) {
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
         window.location.reload();
      }
      else if (name === "randomWalls") {
         setWalls(false);
         cleanPath(false);
         setStartVisualize(false)
         setnode(true)
         setclearWalls(false)
         setRandomWalls(true)
      }
   }
   function onVisualize() {
      if (algo !== "") {
         setStartVisualize(true);
      }
      else {
         setshowModel(true);
      }
   }
   return (
      <div className="options">
         <div className="controller">
            <div>Speed: {speedVal} ms</div>
            <div className="speed-controller">
               <div className="hint">Fast</div>
               <input type="range" disabled={Visualize} onChange={() => { setspeedVal(document.getElementsByClassName("slider")[0].value); }} min="10" max="500" className="slider"></input>
               <div className="hint">Slow</div>
            </div>
         </div>
         <div className="extra-options">
            <div className="button" onClick={() => { onVisualize() }}>Visualize</div>
            <div className="cleaning-funct" onClick={() => { option("setWalls") }}>Set Walls</div>
            <div className="cleaning-funct" onClick={() => { option("nodes") }}>Set Nodes</div>
            <div className="cleaning-funct" onClick={() => { option("walls") }}>Clear Walls</div>
            <div className="cleaning-funct" onClick={() => { option("randomWalls") }}>Set Random Walls</div>
            <div className="cleaning-funct" onClick={() => { option("path") }}>Clear Path</div>
            <RefreshIcon className="cleaning-funct" onClick={() => { option("reload") }}></RefreshIcon>
         </div>
      </div>
   )
}
