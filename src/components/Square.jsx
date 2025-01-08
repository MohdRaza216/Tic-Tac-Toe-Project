import React from "react";
import PropTypes from "prop-types";

function Square({ value, chooseSquare, isWinningSquare }) {
  return (
    <button
      className={`square ${isWinningSquare ? "winning" : ""}`}
      onClick={chooseSquare}
      onKeyDown={(e) => {
        if (e.key === "Enter") chooseSquare();
      }}
    >
      {value}
    </button>
  );
}

Square.propTypes = {
  value: PropTypes.string.isRequired,
  chooseSquare: PropTypes.func.isRequired,
  isWinningSquare: PropTypes.bool.isRequired,
};

export default Square;
