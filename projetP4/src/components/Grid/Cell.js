// == Import npm
import React from 'react';

// == Import
import './styles.scss';

// == Composant
const Cell = ({ cell, id, game, rowId }) => {
    const cellOnClick = () => {
        game(id);
    }
    //selon le tour du joueur via cette variable on affichera la couleur correspondante
    let boxStyle;
	if (cell === 'player2') {
        boxStyle = 'cellsPlayerTwo';
    }
	else if (cell === 'player1') {
        boxStyle = 'cellsPlayerOne';
    }
   return (
    <td>
    <div className="cells" cell={cell} key={id} onClick={cellOnClick}>
        <div className={boxStyle}>
            <div className="cellsData">
            col: {id}
            <br></br>
            row: {rowId}
            </div>
        </div>
    </div>
    </td>
)};

// == Export
export default Cell;
