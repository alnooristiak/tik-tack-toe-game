import React, { useState } from 'react';
import SquareBox from '../SquareBox/SquareBox';
import './Board.css'

const Board = () => {
    const [state, staeState] = useState(Array(9).fill(null));
    const [xtrun, setXtrun] = useState(true);

    // console.log(state);
    const handleClicked = (index) => {
        // console.log('value of clicking', index);
        let copyState = [...state];
        copyState[index] = xtrun ? "X" : "O";
        staeState(copyState);

        // Make a x value are false 
        setXtrun(!xtrun);
    }

    // get winner valu box click handeler 
    const checkWinner = () => {
        const getWinnerValue = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        // for each loop to get Winner
        for (let logic of getWinnerValue) {
            const [a, b, c] = logic;
            if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
                return state[a];
            }
        }
    }

    const winnerIs = checkWinner();

    return (
        <div className='board-container'>
            {winnerIs ? <>OUR WINNER IS: {winnerIs}</> :
                <>
                    <div className="board-row">
                        <SquareBox onClick={() => handleClicked(0)} value={state[0]} />
                        <SquareBox onClick={() => handleClicked(1)} value={state[1]} />
                        <SquareBox onClick={() => handleClicked(2)} value={state[2]} />
                    </div>
                    <div className="board-row">
                        <SquareBox onClick={() => handleClicked(3)} value={state[3]} />
                        <SquareBox onClick={() => handleClicked(4)} value={state[4]} />
                        <SquareBox onClick={() => handleClicked(5)} value={state[5]} />
                    </div>
                    <div className="board-row">
                        <SquareBox onClick={() => handleClicked(6)} value={state[6]} />
                        <SquareBox onClick={() => handleClicked(7)} value={state[7]} />
                        <SquareBox onClick={() => handleClicked(8)} value={state[8]} />
                    </div>
                </>
            }
        </div>
    );
};

export default Board;