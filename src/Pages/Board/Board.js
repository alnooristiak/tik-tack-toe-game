import React from 'react';
import SquareBox from '../SquareBox/SquareBox';
import './Board.css'

const Board = () => {
    return (
        <div className='container board-container'>
            <div className="board-row col">
                <SquareBox />
                <SquareBox />
                <SquareBox />
            </div>
            <div className="board-row col">
                <SquareBox />
                <SquareBox />
                <SquareBox />
            </div>
            <div className="board-row col">
                <SquareBox />
                <SquareBox />
                <SquareBox />
            </div>
        </div>
    );
};

export default Board;