import React from 'react';
import gear from '../assets/images/circuit-board-gear.png';

const Construction = props => {
    return (
        <div className="flex flex-center construction-wrapper">
            <img src={gear} alt="Spinning Gear"/>
        </div>
    );
}

export default Construction;