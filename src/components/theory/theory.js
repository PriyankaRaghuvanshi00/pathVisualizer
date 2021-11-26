import React, { useState } from 'react'
import { useHistory } from 'react-router';
import { TheoryData } from '../../TheoryData/Theory'
import "./theory.css"
import dikst from "../../TheoryData/Dijkstra_Animation.gif"
import astart from "../../TheoryData/AstarExampleEn.gif"
export default function Theory({ algo }) {
   var history = useHistory();
   let d;
   if (algo === "Dijkstra") {
      d = TheoryData[0];
   }
   else if (algo === "A*") {
      d = TheoryData[1];
   }
   else if (algo === "DFS") {
      d = TheoryData[2];
   }
   else if (algo === "BFS") {
      d = TheoryData[3];
   }
   return algo ? <div className="theory">
      <h1 className="title">{algo[0].toUpperCase() + algo.slice(1) + '  Algorithm'}</h1>
      <p className="defination">{d?.defination}</p>
      <img src={d?.gif} alt={algo} width="250" />
      <div className="links">
         {
            d?.links.map(i => <div className="div"><h2>{i.youtubeLink ? 'YOUTUBE LINK :' : null}</h2><a href={`i`}>{i.youtubeLink ? i.youtubeLink : null}</a></div>)
         }
      </div>
   </div> : <div style={{ marginTop: "50px", marginLeft: "50px" }}> PAGE NOT FOUND!  <span style={{ color: "green", cursor: "pointer" }} onClick={() => history.push("/")}>GO BACK</span> </div>;

}
