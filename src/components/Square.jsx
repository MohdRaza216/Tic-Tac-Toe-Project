import React from 'react'
import PropTypes from 'prop-types'

function Square({ value, chooseSquare }) {
    return (
        <button className="square" onClick={chooseSquare} onKeyDown={(e) => { if (e.key === 'Enter') chooseSquare(); }}>
            {value}
        </button>
    )
}

Square.propTypes = {
    value: PropTypes.string.isRequired,
    chooseSquare: PropTypes.func.isRequired,
}

export default Square
