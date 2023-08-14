import { useState } from 'react';

function Square({value, onSquareClick}){
    return (
    <button className="square" onClick ={onSquareClick}>
      {value}
      </button>
  );
}
  
export default function Board() { const [squares, setSquares] = useState (Array(9).fill(null));
  function handleClick() {const nextSquares = squares.slice();
  nextSquares [0]="X";
setSquares(nextSquares);}
 
    return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </> 
    );
}  
