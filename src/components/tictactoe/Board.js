import React from 'react';
import Cell from './Cell';

const Board = (prods) => {
  return (
    <div className="game-board">
      {
        prods.cells.map((item, index) => (
          <Cell
            key={index}
            value={item}
            onClick={() => prods.onClick(index)}
            className={item === 'X' ? 'is-x' : item === 'O' ? 'is-o' : ''}
          ></Cell>
        ))
      }
    </div>
  );
};

export default Board;
