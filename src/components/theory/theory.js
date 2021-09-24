import React, { useState } from 'react'
import { TheoryData } from '../../TheoryData/Theory'
import "./theory.css"

export default function Theory({ algo }) {
   let d;
   if (algo === "Dijkstra") {
      d = TheoryData[0];
   }
   else  if (algo === "A*") {
      d = TheoryData[1];
   }
   else  if (algo === "DFS") {
      d = TheoryData[2];
   }
   else  if (algo === "BFS") {
      d = TheoryData[3];
   }
   return (
      <div className="theory">
         <h1 className="title">{algo[0].toUpperCase()+algo.slice(1)+'  Algorithm'}</h1>
         <p className="defination">{d?.defination}</p>
         <div className="links">
            {
               d?.links.map(i => <a href={`i`}>{i}</a>)
            }
         </div>
      </div>
   )
}
