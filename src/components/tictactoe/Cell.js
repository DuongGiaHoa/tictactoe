import React from 'react';

const Cell = ({value, onClick, className}) => {
  return (
    <div className={`game-cell ${className}`} onClick={onClick}>
    </div>
  );
};

export default Cell;

