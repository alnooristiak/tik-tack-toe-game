import React, { useState } from 'react';
import SquareBox from '../SquareBox/SquareBox';
import './Board.css'

const Board = () => {
    const [state, staeState] = useState(Array(9).fill(null));
    const [xtrun, setXtrun] = useState(true);

    // console.log(state);
    const handleClicked = (index) => {
        // error hendel to duble click to value are changed 
        if (state[index] !== null) {
            return;
        }

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

    // play again btn and handle to reset game to all of box are null/mt 
    const handleReset = () => {
        staeState(Array(9).fill(null));
    }

    return (
        <div className='container board-container'>
            {winnerIs ?
                <>
                    <h2>OUR WINNER IS: <span className='winner-text'>
                    {winnerIs}</span></h2>
                    <div>
                        <button className='play-again btn' onClick={handleReset}>PlaY AgaiN</button>
                    </div>
                </> :
                <>
                    <div className='py-3'>
                        <h4>Player <strong className='winner-text'>{xtrun ? "X" : "O"}</strong> Trun.</h4>
                        <h5> Please Click Containue to <strong>GAME</strong> </h5>
                    </div>
                    <div className="row">
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
                    </div>
                </>
            }
        </div>
    );
};

export default Board;