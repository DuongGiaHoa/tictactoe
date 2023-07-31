import React, {useReducer} from 'react';
import Board from './Board';
import './GameStyle.css';
import {calculateWinner} from '../../helpers';

const initialState = {
  board: Array(9).fill(null),
  xIsNext: true,
};

const gameReducer = (state, action) => {
  switch (action.type) {
    case 'CLICK': {
      const {board, xIsNext} = state;
      const {index, winner} = action.payload;

      if (winner || board[index]) return state;

      const nextState = JSON.parse(JSON.stringify(state));
      nextState.board[index] = xIsNext ? 'X' : 'O';
      nextState.xIsNext = !xIsNext;

      return nextState;
    }
    case 'RESET': {
      const nextState = JSON.parse(JSON.stringify(state));
      nextState.board = Array(9).fill(null);
      nextState.xIsNext = true
      return nextState;
    }

    default:
      break;
  }
  return state;
};

const Game = () => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  const winner = calculateWinner(state.board);
  const handleClick = (index) => {

    dispatch({
      type: 'CLICK', payload: {
        index,
        winner,
      },
    });
  };
  const handleResetGame = () => {
    dispatch({
      type: 'RESET',
    });
  };

  return (<div>
    <Board cells={state.board} onClick={handleClick}></Board>
    {winner && <h1 className="winner">
      Winner is {winner}
    </h1>}


    <button className="btn-reset" onClick={handleResetGame}>Reset Game
    </button>
  </div>);
};

export default Game;
