import React, {useState} from 'react';
import Board from './Board';
import './GameStyle.css';
import {calculateWinner} from '../../helpers';

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);
  const handleClick = (i) => {
    const boardCopy = [...board];
    if (winner || boardCopy[i]) return;
    boardCopy[i] = xIsNext ? 'X' : 'O';
    setBoard(boardCopy);
    setXIsNext((xIsNext) => !xIsNext);
  };
  const handleResetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div>
      <Board cells={board} onClick={handleClick}></Board>
      {
        winner &&
        <h1 className="winner">
          Winner is {winner}
        </h1>
      }


      <button className="btn-reset" onClick={handleResetGame}>Reset Game
      </button>
    </div>
  );
};

export default Game;
