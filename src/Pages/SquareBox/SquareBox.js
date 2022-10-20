import React from 'react';
import './SquareBox.css';

const SquareBox = (props) => {


    
    return (
        <div onClick={props.onClick} className='square-box'>
            <h2>{props.value}</h2>
        </div>
    );
};

export default SquareBox;