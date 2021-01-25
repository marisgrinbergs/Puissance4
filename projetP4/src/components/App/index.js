// == Import npm
import React, { useEffect, useState } from 'react';
import Grid from '../Grid/index';
import { checkResult } from '../CheckResult/index';

// == Import
import './styles.css';

// == Composant
const App = () => {
  //on initialise les joueurs ainsi que le tour du joueur actuel via un hook d'etat.
  const [player1, setPlayer1] = useState('player1');
  const [player2, setPlayer2] = useState('player2');
  const [currentPlayer, setCurrentPlayer] = useState('player1');
  //on initialise le jeu ainsi que le resultat du jeu.
  const [board, setBoard] = useState([]);
  const [gameResult, setGameResult] = useState("");
  //on charge le jeu via un hook d'effet au tout premier rendu de la page
  useEffect(() => {
    initBoard();
  }, []);
  //cette fonction permet de construire le plateau sous un format 6x7
  const initBoard = () => {
    const newBoard = Array(6).fill().map(() => Array(7).fill(null))
    setBoard(newBoard);
    setCurrentPlayer('player1');
  }
  //cette fonction permet de changer de tour entre les deux joueurs.
  const changeTurn = (whoIsPlaying) => {
    if (whoIsPlaying === 'player1') {
      setCurrentPlayer('player2')
    }
    else {
      setCurrentPlayer('player1')
    }
  }
//cette fonction est lancée a chaque fois qu'un joueur place une piece sur le plateau 
  const startGame = (column) => {
    //on fait une boucle qui parcours les lignes et qui remplace la valeur initale "Null" d'un emplacement vide
    //par un marquage player 1 ou player 2
    for (let row = 5; row >= 0; --row) {
        if (!board[row][column]) {
          board[row][column] = currentPlayer;
          break;
        }
      }
      //ici on vérifie via l'algorithme si l'un des deux joueurs a réussi une combinaison
      //de 4 pions alignés verticalement, horizontalement ou diagonalement.
      //si c'est le cas la fonction changeTurn n'est plus appelé il est donc impossible de remplir un emplacement vide.
      let result = checkResult(board);
      if (result === player1) {
          setGameResult('Player 1'); 
      } else if (result === player2) {
         setGameResult('Player 2');
     } else if (result === 'Tie') {
         setGameResult('Tie');
     } else {
         changeTurn(currentPlayer);
     }
 
}
    return (
    <div className="app">
      <div>
        {
          //On affiche les lignes avec map et on les donnes en props pour pouvoir remplir les colonnes
          //ainsi que la fonction startGame pour pouvoir l'utilisé sur un onClick.
          board.map((row, i) => (
            <Grid key={i} row={row} game={startGame} rowId={i} />
          ))
        }
      </div>
      {//si gameResult n'est pas vide on affiche donc le nom du joueur gagnant au moment de la victoire
        gameResult && <div className="winner">
        {`le gagnant est ${gameResult}`}
      </div>
      }
  </div>
  )};

// == Export
export default App;
