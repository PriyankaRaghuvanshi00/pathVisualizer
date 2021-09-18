import "./body.css"
import React, { useEffect, useState } from 'react'
import Cell from "../node/node"
var cnt = 0;
export default function Body({ cleanPath, clearWalls, isSetNode, algo, speedVal, isWalls }) {
   var init_start_row = 4, init_start_col = 5, init_fin_row = 10, init_fin_col = 10;
   const [StartNodeRow, setStartNodeRow] = useState(init_start_row)
   const [StartNodeCol, setStartNodeCol] = useState(init_start_col)
   const [FinishNodeRow, setFinishNodeRow] = useState(init_fin_row)
   const [FinishNodeCol, setFinishNodeCol] = useState(init_fin_col)
   function setToInit() {
      setStartNodeCol(init_start_col)
      setStartNodeRow(init_start_row)
      setFinishNodeCol(init_fin_col)
      setFinishNodeRow(init_fin_row)
   }
   const Node = (col, row) => {
      return {
         col,
         row,
         isStart: row === StartNodeRow && col === StartNodeCol,
         isFinish: row === FinishNodeRow && col === FinishNodeCol,
         distance: Infinity,
         isVisited: false,
         isWall: false,
         previousNode: null,
      };
   };
   const getInitialGrid = () => {
      const grid = [];
      for (let row = 0; row < 20; row++) {
         const currentRow = [];
         for (let col = 0; col < 30; col++) {
            currentRow.push(Node(col, row));
         }
         grid.push(currentRow);
      }
      return grid;
   };
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
   const [Grid, setGrid] = useState(getInitialGrid())
   useEffect(() => {
      if (clearWalls) {
         setGrid(getInitialGrid())
      }
      else if (cleanPath) {
         setToInit();
         setGrid(getInitialGrid())
      }
   }, [clearWalls, cleanPath,StartNodeCol,StartNodeRow,FinishNodeCol,FinishNodeRow])
   
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
