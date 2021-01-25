// == Import npm
import React from 'react';
import Cell from './Cell';

// == Import
import './styles.scss';

// == Composant
const Grid = ({row, game, rowId}) => {
  return (
      <div>
        {
          row.map((cell, i) => (
            <Cell key={i} cell={cell} row={row} id={i} game={game} rowId={rowId} />
          ))
        }
      </div>
)};

// == Export
export default Grid;