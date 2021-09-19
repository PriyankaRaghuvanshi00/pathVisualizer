export  function setToInit(init_fin_row,init_fin_col,init_start_row,init_start_col,setStartNodeCol,setStartNodeRow,setFinishNodeCol,setFinishNodeRow) {
   setStartNodeCol(init_start_col)
   setStartNodeRow(init_start_row)
   setFinishNodeCol(init_fin_col)
   setFinishNodeRow(init_fin_row)
}

export const Node = (col, row,StartNodeRow,StartNodeCol,FinishNodeRow,FinishNodeCol) => {
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

export const getInitialGrid = (StartNodeRow=4,StartNodeCol=5,FinishNodeRow=10,FinishNodeCol=10) => {
   const grid = [];
   for (let row = 0; row < 20; row++) {
      const currentRow = [];
      for (let col = 0; col < 30; col++) {
         currentRow.push(Node(col, row,StartNodeRow,StartNodeCol,FinishNodeRow,FinishNodeCol));
      }
      grid.push(currentRow);
   }
   return grid;
};