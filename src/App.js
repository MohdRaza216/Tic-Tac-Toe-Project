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
      if (
        newBoard[a] &&
        newBoard[a] === newBoard[b] &&
        newBoard[a] === newBoard[c]
      ) {
        return { winner: newBoard[a], winningSquares: combination };
      }
    }
    return { winner: null, winningSquares: [] };
  };

  const checkDraw = (newBoard) => newBoard.every((square) => square !== "");

  const chooseSquare = (index) => {
    if (board[index] === "" && !winner) {
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);

      const { winner: gameWinner, winningSquares } = checkWin(newBoard);
      if (gameWinner) {
        setWinner(gameWinner);
        setWinningSquares(winningSquares);
      } else if (checkDraw(newBoard)) {
        setDraw(true);
      } else {
        setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
      }
    }
  };

  const resetGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setCurrentPlayer("X");
    setWinner(null);
    setWinningSquares([]);
    setDraw(false);
  };

  return (
    <div className="App">
      <div className="game-info">
        {!winner && !draw && (
          <div className="player-turn">Current Player: {currentPlayer}</div>
        )}
        {winner && <div className="winner">Player {winner} wins!</div>}
        {draw && <div className="draw">It's a draw!</div>}
      </div>

      <div className="board">
        {board.map((value, index) => (
          <Square
            key={`${value}-${index}`}
            value={value}
            chooseSquare={() => chooseSquare(index)}
            isWinningSquare={winningSquares.includes(index)}
          />
        ))}
      </div>

      <div className="restart-button-container">
        <button className="restart-button" onClick={resetGame}>
          Restart
        </button>
      </div>
    </div>
  );
}

export default App;
