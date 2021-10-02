import "./node.css"
import React from 'react'
export default function Node({ col,
   isFinish,
   isStart,
   isWall, row, onClickHandler }) {
   const ClassName = isFinish
      ? 'node node-finish'
      : isStart
         ? 'node node-start'
         : isWall
            ? 'node node-wall'
            : 'node';
   return (
      <div
         id={`node-${row}-${col}`}
         className={`${ClassName}`}
         onClick={() => { onClickHandler(row, col) }}
      >
      </div>
   )
}
