import "./App.css";
import React, { useState } from "react";
import Square from "./components/Square.jsx";

function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [winningSquares, setWinningSquares] = useState([]);
  const [draw, setDraw] = useState(false);
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWin = (newBoard) => {
    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        setWinner(newBoard[a]);
        setWinningSquares(combination);
        return true;
      }
    }
    return false;
  };

  
  const checkDraw = (newBoard) => {
    if (newBoard.every((square) => square !== "")) {
      setDraw(true);
    }
  };
  
  
  const chooseSquare = (index) => {
    if (board[index] === "" && !winner) {
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);
  
      if (!checkWin(newBoard)) {
        checkDraw(newBoard);
        setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
      }
    }
  };
  
  if (winner) {
    return <div className="winner">Player {winner} wins!</div>;
  } else if (draw) {
    return <div className="draw">It's a draw!</div>;
  }
  const resetGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setCurrentPlayer("X");
    setWinner(null);
    setDraw(false);
  };

  const restartButton = (
    <button className="restart-button" onClick={resetGame}>
      Restart
    </button>
  );

  return (
    <div className="App">
        <span className="player-turn-container">
      {!winner && !draw && <div className="player-turn">Current Player: {currentPlayer}</div>}
        </span>
      <div className="board">
        <div className="row">
          <Square
            value={board[0]}
            chooseSquare={() => {
              chooseSquare(0);
            }}
            isWinningSquare={winningSquares.includes(0)}
          />
          <Square
            value={board[1]}
            chooseSquare={() => {
              chooseSquare(1);
            }}
            isWinningSquare={winningSquares.includes(1)}
          />
          <Square
            value={board[2]}
            chooseSquare={() => {
              chooseSquare(2);
            }}
            isWinningSquare={winningSquares.includes(2)}
          />
        </div>

        <div className="row">
          <Square
            value={board[3]}
            chooseSquare={() => {
              chooseSquare(3);
            }}
            isWinningSquare={winningSquares.includes(3)}
          />
          <Square
            value={board[4]}
            chooseSquare={() => {
              chooseSquare(4);
            }}
            isWinningSquare={winningSquares.includes(4)}
          />
          <Square
            value={board[5]}
            chooseSquare={() => {
              chooseSquare(5);
            }}
            isWinningSquare={winningSquares.includes(5)}
          />
        </div>

        <div className="row">
          <Square
            value={board[6]}
            chooseSquare={() => {
              chooseSquare(6);
            }}
            isWinningSquare={winningSquares.includes(6)}
          />
          <Square
            value={board[7]}
            chooseSquare={() => {
              chooseSquare(7);
            }}
            isWinningSquare={winningSquares.includes(7)}
          />
          <Square
            value={board[8]}
            chooseSquare={() => {
              chooseSquare(8);
            }}
            isWinningSquare={winningSquares.includes(8)}
          />
        </div>
      </div>
      <span className="restart-button-container">
      {restartButton}
      </span>
    </div>
  );
}

export default App;
