import "./body.css"
import React, { useEffect, useState } from 'react'
import Cell from "../node/node"
import { setToInit, Node, getInitialGrid } from "./initialGridFunct";
import { dijkstra, getNodesInShortestPathOrder } from "../../algorithms/dijkstra";
var cnt = 0;
export default function Body({ setStartVisualize, StartVisualize, setStartNodeRow, setFinishNodeRow, setFinishNodeCol, setStartNodeCol, StartNodeRow, StartNodeCol, FinishNodeRow, FinishNodeCol, Grid, setGrid, cleanPath, clearWalls, isSetNode, algo, speedVal, isWalls }) {
   const [visitedNodesInOrder, setvisitedNodesInOrder] = useState([])
   var init_start_row = 4, init_start_col = 5, init_fin_row = 10, init_fin_col = 10;
   const onClickHandler = (row, col) => {
      if (isWalls) {
         const newGrid = Grid.slice();
         const Node = newGrid[row][col];
         const newNode = {
            ...Node,
            isWall: !Node.isWall
         };
         newGrid[row][col] = newNode;
         setGrid(newGrid);
      }
      else if (isSetNode) {
         ++cnt;
         const newGrid = Grid.slice();
         const Node = newGrid[row][col];
         const old = {
            ...Node,
            isStart: false,
            isFinish: false,
         };
         if (cnt === 1) {
            newGrid[StartNodeRow][StartNodeCol] = old;
            const newNode = {
               ...Node,
               isStart: true,
               isFinish: false,
            };
            setStartNodeRow(row);
            setStartNodeCol(col);
            newGrid[row][col] = newNode;
         }
         else if (cnt === 2) {
            newGrid[FinishNodeRow][FinishNodeCol] = old;
            const newNode = {
               ...Node,
               isStart: false,
               isFinish: true,
            };
            setFinishNodeRow(row);
            setFinishNodeCol(col);
            newGrid[row][col] = newNode;
            cnt = 0;
         }
         setGrid(newGrid);
      }
   }
   function AnimateAlgorithm(visitedNodesInOrder, nodesInShortestPathOrder) {
      for (let i = 0; i <= visitedNodesInOrder.length; i++) {
         if (i === visitedNodesInOrder.length) {
            setTimeout(() => {
               AnimateShortestPath(nodesInShortestPathOrder);
            }, 10 * i);
            return;
         }
         const node = visitedNodesInOrder[i];

         if ((node.row == StartNodeRow && node.col == StartNodeCol) || (node.row == FinishNodeRow && node.col == FinishNodeCol)) {
         }
         else {
            setTimeout(() => {
               document.getElementById(`node-${node.row}-${node.col}`).className =
                  'node node-visited';
            }, 10 * i);
         }
      }
   }
   function AnimateShortestPath(nodesInShortestPathOrder) {
      nodesInShortestPathOrder.forEach(i => {
         setTimeout(() => {
            if ((i.row === StartNodeRow && i.col === StartNodeCol) || (i.row === FinishNodeRow && i.col === FinishNodeCol)) {
               // nothing to do 
            }
            else {
               document.getElementById(`node-${i.row}-${i.col}`).classList = "node node-shortes-path";
            }
         }, (50 * i))
      });
   }
   function visualize() {
      console.log(algo);
      const grid = [...Grid];
      const startNode = grid[StartNodeRow][StartNodeCol];
      const finishNode = grid[FinishNodeRow][FinishNodeCol];
      let visitedNodesInOrder, nodesInShortestPathOrder;
      let flag = 0;
      if (algo === "Dijkstra") {
         visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
         nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
         flag = 1;
         setStartVisualize(false);
      }
      else if (algo === "A*") {
         //for A*
      }
      else if (algo === "Prims") {
         // for prims
      }
      else if (algo === "kruskal") {
         // for krushkal
      }
      if (flag)
         AnimateAlgorithm(visitedNodesInOrder, nodesInShortestPathOrder);
   }
   useEffect(() => {
      if (clearWalls) {
         setGrid(getInitialGrid(StartNodeRow, StartNodeCol, FinishNodeRow, FinishNodeCol))
      }
      else if (cleanPath) {
         setToInit(init_fin_row, init_fin_col, init_start_row, init_start_col, setStartNodeCol, setStartNodeRow, setFinishNodeCol, setFinishNodeRow);
         setGrid(getInitialGrid(StartNodeRow, StartNodeCol, FinishNodeRow, FinishNodeCol))
         Grid.forEach(element => {
            element.forEach(i => {
               const className = i.isFinish
                  ? 'node node-finish'
                  : i.isStart
                     ? 'node node-start'
                     : i.isWall
                        ? 'node node-wall'
                        : 'node';
               document.getElementById(`node-${i.row}-${i.col}`).classList = `${className}`;
            });
         });
      }
      else if (StartVisualize) {
         { visualize(); }
      }
   }, [clearWalls, StartVisualize, cleanPath, StartNodeCol, StartNodeRow, FinishNodeCol, FinishNodeRow])

   return (
      <div className="body">
         {
            Grid.map((row, index) => {
               return (
                  <div key={index} className="grid">
                     {
                        row.map((node, nodeind) => {
                           return <Cell onClickHandler={onClickHandler} key={nodeind} col={node.col} row={node.row} isFinish={node.isFinish} isStart={node.isStart} isWall={node.isWall} />
                        })
                     }
                  </div>
               )
            })
         }
      </div>
   )
}